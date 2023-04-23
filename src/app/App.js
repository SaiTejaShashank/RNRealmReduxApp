import React,{ useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Realm from 'realm';


import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import AuthContext from './auth/context';


import {createStore} from 'redux';
import movies from './reducers';

const store=createStore(movies);


// schema for database objects
const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
    dob:'string'
  },
  primaryKey: '_id',
};


const TaskSchemaLogin = {
  name: 'Login',
  properties: {
    _id: 'int',
    name: 'string',
    email: 'string',
    password:'string',
    age:'string'
  },
  primaryKey: '_id',
};

export default function App() {

  const {user}=store.getState();
  const [refresh,setRefresh]=useState(false);
  const [tasks, setTasks] = React.useState([]);
  const [realm, setRealm] = React.useState(null);
  

  store.subscribe(()=>{
    setRefresh(!refresh);
  })

  useEffect(()=>{
    /*store.subscribe(()=>{
      console.log('patient added');
      setRefresh(!refresh);
    })*/
  //fetchDataFromFirebase();


  realmFunctions();
    },[])
  
    const realmFunctions=async ()=>{
        // initialize realm...
        const realm = await Realm.open({
          path: 'myrealm',
          schema: [TaskSchema,TaskSchemaLogin],
          deleteRealmIfMigrationNeeded: true
        }).then(realm => {

          /*const tasks = realm.objects('Task');  
          console.log('hello',tasks);
          setTasks([...tasks]);*/

          setRealm(realm);
          /*try {
            tasks.addListener(() => {
              setTasks([...tasks]);
            });
          } catch (error) {
            console.error(`Error updating tasks: ${error}`);
          }*/
        });
    }
  
  return (
    <AuthContext.Provider value={{user,store,realm}}>
   <NavigationContainer>
    {user?<AppNavigator/>:<AuthNavigator/>}
   </NavigationContainer>
   </AuthContext.Provider>
  
  );
}


