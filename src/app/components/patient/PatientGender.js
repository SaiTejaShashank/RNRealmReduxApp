import React,{useState} from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import { useFormikContext } from "formik";
import RadioButton from '../RadioButton';
import colors from '../../config/colors';

function PatientGender(props) {

    const [radio1,setRadio1]=useState(true);
    const [radio2,setRadio2]=useState(false);

    const {  errors,values,setFieldValue } = useFormikContext();

    const radioPress1=()=>{
        setRadio1(true);
        setRadio2(false);
        setFieldValue("status","MALE");
       // setRadioSelected("MALE");
    }

    const radioPress2=()=>{
        setRadio1(false);
        setRadio2(true);
       setFieldValue("status","FEMALE");
        //setRadioSelected("FEMALE");
    }
    return (
        <View style={styles.radioConatiner}>

            <Text style={{paddingRight:10,fontSize:16}}>Gender:</Text>

            <View style={styles.radio}>
             <TouchableOpacity onPress={radioPress1} >
            <RadioButton selected={radio1} ></RadioButton>
            </TouchableOpacity>
            <Text style={{paddingLeft:5}} >MALE</Text>
            </View>
            

            <View style={[styles.radio,{marginLeft:25}]}>
            <TouchableOpacity onPress={radioPress2}>
            <RadioButton selected={radio2}></RadioButton>
            </TouchableOpacity>
            <Text style={{paddingLeft:5}}>FEMALE</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    radio:{
        flexDirection:"row",
        alignItems:"center"
 
    },
    radioConatiner:{
        backgroundColor:colors.white,
        flexDirection:"row",
        padding:10,
    }
})
export default PatientGender;