import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen';
import PatientScreen from '../screens/PatientScreen';

const St=createStackNavigator();
function AppNavigator(props) {
        return(
            <St.Navigator  initialRouteName="Home">
                <St.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                <St.Screen name="Patient" component={PatientScreen} options={{headerShown:false}}/>
            </St.Navigator>    
    );
}
export default AppNavigator;