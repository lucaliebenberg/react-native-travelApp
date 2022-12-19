import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Seperator = () => {
  return (
    <View style={styles.seperator}>
      <Text>Seperator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  seperator: {
    marginTop: 16,
    marginHorizontal: 16,
    height: 1,
    backgroundColor: "grey",
  },
});

export default Seperator;
