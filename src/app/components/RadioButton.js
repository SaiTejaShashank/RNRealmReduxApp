import React,{useState} from "react";
import {View} from 'react-native'
import colors from "../config/colors";

function RadioButton(props) {
    return (
        <View style={[props.selected?{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }:{height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: colors.grey,
          alignItems: 'center',
          justifyContent: 'center',}, props.style]}>
          {
            props.selected ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: colors.primary,
              }}/>
              : null
          }
        </View>
    );
  }
  export default RadioButton;