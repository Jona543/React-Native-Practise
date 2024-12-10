import React from "react";
import { ImageBackground, StyleSheet } from "react-native-web";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/favicon.png")}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({});

export default WelcomeScreen;
