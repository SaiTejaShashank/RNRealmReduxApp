import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import colors from '../../config/colors';

function PatientCard({name,age,gender}) {
    return (
            <View style={styles.container}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={styles.text}>{age}</Text> 
                    <Text style={styles.text}>{gender}</Text>
            </View>
            );
        }
        


        const styles = StyleSheet.create({
            container:{
                backgroundColor:colors.secondary,
                marginHorizontal:10,
                padding:20,
                alignItems:"center",
                borderWidth:0.8
            },
            text:{
                fontSize:16,
                fontWeight:"400",
                textTransform:"capitalize"
            }
        })
    
export default PatientCard;