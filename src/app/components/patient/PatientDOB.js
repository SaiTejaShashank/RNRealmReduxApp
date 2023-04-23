import React, { useState } from 'react';
import { Button, View,StyleSheet,Text, TouchableWithoutFeedback} from 'react-native';
import { useFormikContext } from "formik";
import DatePickerModal from 'react-native-modal-datetime-picker';
import colors from '../../config/colors';

import { ErrorMessage } from '../forms';

function PatientDOB(props) {

    const [show,setShow]=useState(false);
    const [date,setDate]=useState();
    const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

    const {  errors,values,setFieldValue } = useFormikContext();

    const onChange=(date)=>{
        let val=month[date.getMonth()]+' '+date.getDate()+','+date.getFullYear()
        setDate(val);
        setFieldValue("dob",val);
        setShow(false);
    }
    return (
        <>
        <View style={styles.container}>
            
            
            <TouchableWithoutFeedback onPress={()=>{setShow(!show)}}>
            <Text style={styles.text}>Date of Birth</Text>
            </TouchableWithoutFeedback>
            <Text style={[styles.text,{marginLeft:10}]}>{date}</Text>
            
            <DatePickerModal isVisible={show} mode={'date'} onConfirm={onChange} onCancel={()=>{setShow(!show)}}/>
        </View>

        <ErrorMessage error={errors["dob"]} />
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:"100%",
        backgroundColor:colors.white,
        marginVertical:10,
        alignItems:"center",
        padding:10
    },
    text:{
        fontSize:16,
        marginRight:10,
    }
})

export default PatientDOB;