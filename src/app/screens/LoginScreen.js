import React, { useState,useContext, useEffect } from "react";
import { StyleSheet, Image,View,Text } from "react-native";
import * as Yup from "yup";
import { firebase } from '../../../firebaseConfig';

import AuthContext from "../auth/context";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import { addUser, logout } from "../actions";



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(7, 'Password must be 8 characters long')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol').label("Password"),
});



function LoginScreen({navigation}) {



  const {store,realm}=useContext(AuthContext);
  //const todoRef=firebase.firestore().collection('loginDetails');
  
  const [loginFailed, setLoginFailed] = useState(false);



  /*const fetchDataFromFirebase=(email,password)=>{
    
    todoRef.where('email','==',email)
    .where('password','==',password)
    .get()
    .then(querySnapShot=>{
      if(querySnapShot.size>0){
        querySnapShot.docs.map((doc)=>{
        const {name,email,age}=doc.data();
        
        store.dispatch(addUser({name,email,age}));
      
        })
      }
      else{
        store.dispatch(logout());
      }
    })
  }*/

  const addTask = ({email,password}) => {
    const out = realm.objects('Login').filtered(`email == "${email}" && password == "${password}"`)
    if(out.length>0){
      let user=out[0];  
      store.dispatch(addUser({name:user.name,email:user.email,age:user.age}));
    }
    else{
        store.dispatch(logout());
        setLoginFailed(true);
    }   
  };
 
  const handleSubmit= async ({email,password})=>{
   //fetchDataFromFirebase(email,password);
   addTask({email,password});

  }


  useEffect(()=>{

   
    store.subscribe(()=>{
     
    })



},[])



 




  return (
    <Screen style={styles.container}>
    <Image style={styles.logo} source={require("../assets/cureSelect.png")} resizeMode="contain"/>

    <Form
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <ErrorMessage
        error="Invalid email and/or password."
        visible={loginFailed}
      />
      <FormField
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        name="email"
        placeholder="Email"
        textContentType="emailAddress"
      />
      <FormField
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        name="password"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <SubmitButton title="Login" />
    </Form>
    <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account yet?</Text>
        <Text style={[styles.footerText,{color:colors.medium}]} onPress={()=>{navigation.navigate('Register')}} >Click to Register</Text>
    </View>
  </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  footer:{
    alignItems:"center",
    justifyContent:"center",
  },
  footerText:{
    fontSize:18,
    fontWeight:"bold",
    color:colors.white
  },
  logo: {
    width: "100%",
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;