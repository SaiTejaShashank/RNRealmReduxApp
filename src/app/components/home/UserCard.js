import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import colors from '../../config/colors';



function UserCard({name,age,email}) {
    return (
        <View style={styles.container}>
            
             <View style={styles.details}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{age} Years</Text>
            <Text style={styles.text}>{email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    details:{
        paddingLeft:20
    },
    container:{
        flexDirection:"row",
        backgroundColor:colors.white,
        margin:10,
        
        borderRadius:15,
        padding:20,
        alignItems:"center"
    },
    text:{
        fontSize:16,
        fontWeight:"400",
        textTransform:"capitalize"
    }
})

export default UserCard;