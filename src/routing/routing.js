import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../components/login';
import Navigations from '../components/Navigations';

function Routing() {
    const [isLoggedIn,setLoggedIn] = useState(false)
    return(
        <NavigationContainer>
            {
                !isLoggedIn ? <Login loginSuccess={setLoggedIn} /> : <Navigations />
            }
        </NavigationContainer>
    )

}

export default Routing