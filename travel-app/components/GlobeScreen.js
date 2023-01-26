import React from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import MapView from "react-native-maps";

const GlobeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput />
      <MapView
        userInterfaceStyle="dark"
        style={StyleSheet.absoluteFill}
        mapType={"satelliteFlyover"}
      />
    </View>
  );
};

export default GlobeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
