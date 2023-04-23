import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import colors from '../../config/colors';

function PatientListTitle(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Patients List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        marginHorizontal:10,
        padding:20,
    },
    text:{
        fontSize:16,
        fontWeight:"bold",
        textTransform:"capitalize"
    }
})
export default PatientListTitle;