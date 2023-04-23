import {createStackNavigator} from "@react-navigation/stack";
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const St=createStackNavigator();

const AuthNavigator=()=>{
    return(
    <St.Navigator  initialRouteName="Login">
        <St.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <St.Screen name="Register" component={RegistrationScreen} options={{headerShown:false}}/>
    </St.Navigator>
    );    
};
export default AuthNavigator;
