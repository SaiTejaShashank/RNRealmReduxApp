export const ADD_USER='ADD_USER';
export const CREATE_PATIENT='CREATE_PATIENT';
export const ADD_PATIENTS='ADD_PATIENTS';
export const LOGOUT='LOGOUT';

export function addUser(data){
    return{
        type:ADD_USER,
        data:data
    }
}

export function createPatient(data){
    return{
        type:CREATE_PATIENT,
        data:data
    }
}

export function addPatients(data){
    return{
        type:ADD_PATIENTS,
        data:data
    }
}

export function logout(){
    return{
        type:LOGOUT,
        data:null
    }
}