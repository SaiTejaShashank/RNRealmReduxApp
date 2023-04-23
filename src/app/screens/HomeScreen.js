import React, { useEffect, useState,useContext } from 'react';
import { FlatList, View } from 'react-native';
import { firebase } from '../../../firebaseConfig';
import Realm from 'realm';

import Screen from '../components/Screen';
import UserCard from '../components/home/UserCard';
import PatientListTitle from '../components/home/PatientListTitle';
import PatientCard from '../components/home/PatientCard';
import AppButton from '../components/AppButton';
import AuthContext from "../auth/context";
import { addPatients, logout } from '../actions';




function HomeScreen({navigation}) {

    const {store}=useContext(AuthContext);
    const {user,patients}=store.getState();

    //const todoRef=firebase.firestore().collection('patientDetails');


 /* const fetchDataFromFirebase=async ()=>{
    var users=[];
  
    todoRef.onSnapshot((snapShot)=>{
      users=[]
        snapShot.docs.map((doc)=>{
          const {name,dob,gender}=doc.data();
          users.push({
            name:name,
            dob:dob,
            gender:gender,
          })
        })
    
        store.dispatch(addPatients(users));
      })

    }*/
    
    return (
        <Screen style={{flex:1}}>
            <UserCard name={user.name} email={user.email} age={user.age}/>
            <PatientListTitle/>
            <FlatList
                scrollEnabled={true}
                data={patients}
                renderItem={({item})=>(<PatientCard name={item.name} age={item.dob} gender={item.status}/>)}
              />
            <View style={{width:"100%"}} >
            <AppButton title={"ADD PATIENT"} onPress={()=>{navigation.navigate('Patient')}}/>
            <AppButton title={"LOGOUT"} onPress={()=>{store.dispatch(logout())}}/>
            </View>  
        </Screen>
    );
}

export default HomeScreen;