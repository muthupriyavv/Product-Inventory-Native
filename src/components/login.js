import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput , Button} from 'react-native';

function Login(props){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(false)

    const onLogin = async () => {
        console.log("loginnnnnn")
        if(username !=="" && password !==""){
            if(username === "admin@gmail.com" && password === "admin"){
                setError(false)
                props.loginSuccess(true)
            }
            else{
                setError(true)
            }
        }
        else{
            setError(true)
        }
    }

    return(
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
         style={styles.textField}
         placeholder="Email Id"
         placeholderTextColor="#fff"
         onChangeText={text => setUsername(text)}
      />
      <TextInput 
         style={styles.textField}
         placeholder="password"
         placeholderTextColor="#fff"
         onChangeText={text => setPassword(text)}
      />
      <Button 
        title="Login"
        onPress={onLogin}
       />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    },
    loginText:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
    },
    textField:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        color: "white"
    }

  });

  export default Login;