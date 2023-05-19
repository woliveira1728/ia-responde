import React from "react";
import { StyleSheet, View, Image, Dimensions, PlatformColor } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



const { width } = Dimensions.get("screen");

export function ScreenA() {
  
  return (
    <View style={styles.logoContainer}>
        <Image source={require("../assest/screen.png")} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#191970"
  },
  logo: {
    width: width,
    height: 815,
  }
});

export default ScreenA;