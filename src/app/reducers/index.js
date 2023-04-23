import React from 'react';
import { ADD_USER,CREATE_PATIENT,ADD_PATIENTS,LOGOUT} from '../actions';

const initialState={
    user:null,
    patients:[]
}
export default function movies(state=initialState,action) {

    if(action.type==CREATE_PATIENT)
    return {
        ...state,
        patients:[action.data,...state.patients]
    }

    if(action.type==ADD_PATIENTS)
    return {
        ...state,
        patients:[...action.data]
    }

    if(action.type==ADD_USER)
    return {
        ...state,
        user:{...action.data}
    }

    if(action.type==LOGOUT)
    return {
        ...state,
        user:action.data
    }

    return state;
}
