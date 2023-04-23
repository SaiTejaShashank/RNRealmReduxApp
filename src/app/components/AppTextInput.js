import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";


function AppTextInput(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...props}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor:colors.white,
  },
  textInput:{
      fontSize:18,
      fontFamily:Platform.OS=="android"?"Roboto":"Avenir",
  }
});

export default AppTextInput;
