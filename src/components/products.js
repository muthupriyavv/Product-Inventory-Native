import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, StyleSheet, View,TextInput } from 'react-native';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import deleteProduct from '../actions/deleteProduct';
import initialProduct from '../actions/initialProduct';
class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productList:[],
            filterList:[]
        }
        this.deleteProduct = this.deleteProduct.bind(this)
        this.getAllProducts = this.getAllProducts.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.getAllProducts()

    }

    deleteProduct(id) {
        axios.delete(`http://192.168.43.23:3001/products/${id}`).then((data) => {
            console.log(data)
            this.props.deleteitem(id)
            this.getAllProducts()
        })
    }


     getAllProducts() {
         axios.get("http://192.168.43.23:3001/products").then((data) => {
            console.log(data.data)
            this.props.initialitem(data.data)
            this.setState({
                productList : data.data,
                filterList: data.data
            })
        })
    }

    handleSearch(e) {
        console.log(e.target.value)
        if (e.target.value === "") {
            this.setState({
                productList: this.state.filterList,
            })
        }
        else {
            this.setState({
                searchText: e.target.value,
            }, () => {
                this.filterProducts(this.state.searchText)
            })
        }
    }
    filterProducts(searchText) {
        let filteredProducts = this.state.productList
        filteredProducts = filteredProducts.filter((products) => {
            let productName = products.name.toLowerCase()
            if (productName.includes(searchText.toLowerCase()))
                return products
            return 0;
        })
        this.setState({
            productList: filteredProducts
        })
    }




    render() {
        const styles = StyleSheet.create({
            imageStyle: {
                alignSelf: 'center',
                height: '100%',
                width: '100%',
                resizeMode: 'cover'
            },
            textField: {
                width:"100%",
                borderRadius:25,
                height:50,
                marginBottom:10,
                justifyContent:"center",
                padding:10
            }
        })  
        const productDetails = this.state.productList.map((products) => {
            console.log("newwwwsss", products)
            return <Card key={products.id} >
                <CardImage style={styles.imageStyle} source={{ uri: products.image }}>
                </CardImage>
                <CardTitle
                    title={products.name}
                />
                <CardContent text={products.price} />
                <CardAction
                    separator={true}
                    inColumn={false}>
                    <CardButton
                        onPress={() => { this.props.navigation.navigate('editproduct',{id : products.id})}}
                        title="EDIT"
                        color="blue"
                    />
                    <CardButton
                        onPress={() => this.deleteProduct(products.id)}
                        title="DELETE"
                        color="red"
                    />
                </CardAction>
            </Card>
        })
        return (
            <div>
                <div>
                <Button
                    title="Go to Dashboard"
                    onPress={() => this.props.navigation.navigate('dashboard')}
                />
                </div>
                <div>
                    <TextInput
                    style={styles.textField}
                        placeholder="SEARCH...."
                        onChange={this.handleSearch}
                    />
                </div>
                <div>
                    <Button
                        title="ADD PRODUCT"
                        onPress={() => this.props.navigation.navigate('addproduct')}
                    />
                </div>
                <div>
                    <ScrollView>
                        {productDetails}
                    </ScrollView>
                </div>
            </div>
        )
    }
}

function mapStoreToProps(store) {
    return {
        productList: store.productList
    }
}

function mapPropsToStore(dispatch) {
    return bindActionCreators({
        initialitem: initialProduct,
        deleteitem: deleteProduct
    }, dispatch)
}

export default connect(mapStoreToProps, mapPropsToStore)(Product)