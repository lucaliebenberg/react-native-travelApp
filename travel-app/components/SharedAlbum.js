import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SharedAlbum = ({ route }) => {
  const { album } = route.params;

  return (
    <View>
      <Text>This is the Shared Album</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SharedAlbum;
