import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Product from './products';
import AddProduct from './addProduct';
import EditProduct from './editProduct';
import Dashboard from './dashboard';

function Navigations(props) {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
               <Stack.Screen
                name="products"
                component={Product}
                unmountOnBlur={true}
                options={{
                    title: 'Products',
                    headerStyle: {
                      backgroundColor: '#003f5c',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    unmountOnBlur: true
                  }}
            />
            <Stack.Screen
                name="dashboard"
                component={Dashboard}
                unmountOnBlur={true}
                options={{
                    title: 'Dashboard',
                    headerStyle: {
                      backgroundColor: '#003f5c',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    unmountOnBlur: true
                  }}
            />
            <Stack.Screen
                name="addproduct"
                component={AddProduct}
                options={{
                    title: 'Add Product',
                    headerStyle: {
                      backgroundColor: '#003f5c',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            />
             <Stack.Screen
                name="editproduct"
                component={EditProduct}
                options={{
                    title: 'Edit Product',
                    headerStyle: {
                      backgroundColor: '#003f5c',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            />
        </Stack.Navigator>
    )
}

export default Navigations