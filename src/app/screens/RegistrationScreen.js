import React, { useState,useContext } from "react";
import { StyleSheet,View,Text } from "react-native";
import * as Yup from "yup";
import { firebase } from '../../../firebaseConfig';
import AuthContext from "../auth/context";
import { addUser } from "../actions";


import colors from "../config/colors";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  age:Yup.number().required().min(1).max(100).label("age"),
});

function RegisterScreen({navigation}) {

  const {store,realm}=useContext(AuthContext);

 // const todoRef=firebase.firestore().collection('loginDetails');

  /*const sendDataToFirebase =  ({name,email,password,age})=>{

    const data={
      email:email,
      name:name,
      password:password,
      age:age
    }
    todoRef.add(data)
            .then(()=>{
              console.log("posted data")
            })
            .catch((error)=>{
              console.log(error);
            })
  }*/

  const addTask = (userInfo) => {
    let task1;
    realm.write(() => {
      task1 = realm.create('Login', {
        _id: Date.now(),
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        age:userInfo.age
      });
      console.log(task1);
    });
  };


  const handleSubmit=async ({name,email,password,age})=>{
    //sendDataToFirebase({name,email,password,age});
    addTask({name,email,password,age});
    store.dispatch(addUser({name,email,age}));
   
};

  return (

    <>
    <Screen style={styles.container}>
    <View style={{width:"100%",padding:20,backgroundColor:colors.secondary,alignItems:"center"}}>
      <Text>REGISTRATION PAGE</Text>
    </View>
    
      <Form
        initialValues={{ name: "", email: "", password: "",age:""}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
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
         <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="person"
          name="age"
          placeholder="Age"
          textContentType="telephoneNumber"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
