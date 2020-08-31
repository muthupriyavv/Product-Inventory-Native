import React from 'react'
import axios from 'axios'
import { Text , StyleSheet , View} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            labels:[],
            data:[]
        }

        this.getProducts = this.getProducts.bind(this)
    }

    UNSAFE_componentWillMount(){
        this.getProducts();
    }

    getProducts(){
        let name=[];
        let stock=[];
        axios.get("http://192.168.43.23:3001/products").then((responseData) => {
            console.log(responseData.data)
            name = responseData.data.map((product)=> product.name)
            stock = responseData.data.map((product)=> parseInt(product.quantity))
            console.log("name",name)
            console.log("stock",stock)
            this.setState({
                labels : name,
                data: stock
            })
            console.log("aaaa",this.state.labels)
            console.log("bbbb",this.state.data)
        })
    }

    render(){
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                },
            header:{
                textAlign: 'center', 
                fontWeight: 'bold',
                fontSize: 18,
                marginLeft: 20,
            }
        })
        return(
            <View style={styles.container}>
                <Text style={styles.header}>STOCK AVAILABILITY</Text>
                <LineChart
                    data={{
                        labels: this.state.labels,
                        datasets: [
                            {
                                data : this.state.data
                            }
                        ]
                    }} 
                    width={Dimensions.get("window").width} 
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1} 
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#fb8c00",
                      backgroundGradientTo: "#ffa726",
                      decimalPlaces: 2,
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                        borderRadius: 16
                      },
                      propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                      }
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16
                    }}
                />

            </View>
        )
    }
}

export default Dashboard;