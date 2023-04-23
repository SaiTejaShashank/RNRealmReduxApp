import React from "react";
import { StyleSheet, SafeAreaView, View,StatusBar, Platform } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS=="android"?StatusBar.currentHeight:0,
    flex: 1,
    backgroundColor:"#ffc262",
  },
});

export default Screen;