import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios'
import addProduct from '../actions/addProduct';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            nameError:'',
            quantity: '',
            quantityError:'',
            price: '',
            priceError:'',
            category: '',
            categoryError:'',
            brand: '',
            brandError:'',
            image: ''
        }
        this.onAdd = this.onAdd.bind(this)
        this.setName = this.setName.bind(this)
        this.setPrice = this.setPrice.bind(this)
        this.setQuantity = this.setQuantity.bind(this)
        this.setCategory = this.setCategory.bind(this)
        this.setBrand = this.setBrand.bind(this)
        this.setImage = this.setImage.bind(this)
        this.validate = this.validate.bind(this)
    }

          
    validate(){
        let nameError='';
        let quantityError='';
        let priceError='';
        let brandError='';
        let imageError='';
        let categoryError='';

        if(!this.state.name){
            nameError="Name is required"
        }
        if(!this.state.quantity){
            quantityError="Quantity is required"
        }
        
        if(!this.state.price){
            priceError="Price is required"
        }
        if(!this.state.brand){
            brandError="Brand is required"
        }
        if(!this.state.category){
            categoryError="Category is required"
        }
        

        if (nameError  || quantityError || priceError || brandError || categoryError) {
            this.setState({ nameError ,quantityError,priceError,categoryError,brandError })
            return false;
        }

        return true;
    }

     onAdd(e){
        e.preventDefault();
        const isValid = this.validate()
        if(isValid){
        const products = {
            name : this.state.name,
            price : this.state.price,
            category : this.state.category,
            quantity : this.state.quantity,
            brand:this.state.brand,
            image:this.state.image 
        }

        axios.post("http://192.168.43.23:3001/products", products).then((responseData) => {
            console.log(responseData.data)
            this.props.addnew(responseData.data)
            this.props.navigation.goBack();
        })  
        }
        }
        

        setName = (e) => {
            let nameError=""
            this.setState({
                name : e.target.value
            }, () => {
                if(this.state.name === ""){
                    nameError="Name is required"
                }
                if(nameError){
                    this.setState({
                        nameError
                    })
                }
            })
            this.setState({nameError:""})
        }

        setPrice = (e) => {
            let priceError=""
        this.setState({
            price : e.target.value
        }, () => {
            if(this.state.price === ""){
                priceError="Price is required"
            }
            if(this.state.price !== ""){
                var pattern = new RegExp(/^[0-9\b]+$/)
                if(!pattern.test(this.state.price)){
                    priceError="Price should be a number"
                }
            }
            if(priceError){
                this.setState({
                    priceError
                })
            }
        })
        this.setState({priceError:""})
        }

        setCategory = (e) => {
            let categoryError=""
            this.setState({
                category : e.target.value
            },() => {
                if(this.state.category === ""){
                    categoryError="Category is required"
                }
                if(categoryError){
                    this.setState({
                        categoryError
                    })
                }
            })
            this.setState({categoryError:""})
        }

        setQuantity = (e) => {
            let quantityError=""
            this.setState({
                quantity : e.target.value
            }, () => {
                if(this.state.quantity === ""){
                    quantityError="Quantity is required"
                }
                if(this.state.quantity !== ""){
                    var pattern = new RegExp(/^[0-9\b]+$/)
                    if(!pattern.test(this.state.quantity)){
                        quantityError="Quantity should be a number"
                    }
                }
                if(quantityError){
                    this.setState({
                        quantityError
                    })
                }
            })
            this.setState({quantityError:""})
        }

        setBrand = (e) => {
            let brandError=""
        this.setState({
            brand : e.target.value
        }, () => {
            if(this.state.brand === ""){
                brandError="Brand is required"
            }
            if(brandError){
                this.setState({
                    brandError
                })
            }
        })
        this.setState({brandError:""})
        }

        setImage(e){
            this.setState({
                image :e.target.value
            })
        }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },
            textField: {
                width:"80%",
                backgroundColor:"#465881",
                borderRadius:25,
                height:50,
                marginBottom:20,
                justifyContent:"center",
                padding:20,
                color: "white"
            },
            errorText: {
                fontSize:14,
                color:"red"
            }

        });
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textField}
                    placeholder="Enter name"
                    placeholderTextColor="#fff"
                    onChange={this.setName}
                />
                <Text style={styles.errorText}>{this.state.nameError}</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Enter price"
                    placeholderTextColor="#fff"
                    onChange={this.setPrice}
                />
                <Text style={styles.errorText}>{this.state.priceError}</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="Enter quantity"
                    placeholderTextColor="#fff"
                    onChange={this.setQuantity}
                />
                <Text style={styles.errorText}>{this.state.quantityError}</Text> 
                <TextInput
                    style={styles.textField}
                    placeholder="Enter category"
                    placeholderTextColor="#fff"
                    onChange={this.setCategory}
                />
                <Text style={styles.errorText}>{this.state.categoryError}</Text> 
                <TextInput
                    style={styles.textField}
                    placeholder="Enter brand"
                    placeholderTextColor="#fff"
                    onChange={this.setBrand}
                />
                <Text style={styles.errorText}>{this.state.brandError}</Text> 
                <TextInput
                    style={styles.textField}
                    placeholder="Enter image"
                    placeholderTextColor="#fff"
                    onChange={this.setImage}
                />
                <Button
                    title="Add"
                    onPress={this.onAdd}
                />

            </View>
        )
    }
}

function mapPropsToState(dispatch){
  return bindActionCreators ({
      addnew : addProduct
  },dispatch)
}

export default connect(null,mapPropsToState)(AddProduct);