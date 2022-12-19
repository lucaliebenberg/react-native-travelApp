import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React from "react";

const Card = ({ item, navigation }) => {
  return (
    <ImageBackground source={item.background} style={styles.imageBackground}>
      <Pressable
        onPress={() =>
          navigation.navigate("Shared Album", {
            album: item,
          })
        }
      >
        <View style={styles.imageContainer}>
          <Text style={styles.imageTitle}>{item.title}</Text>
          <Text style={styles.imageSubtitle}>{`Created by ${item.user}`}</Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default Card;

const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: "cover",
    overflow: "hidden",
    height: 100,
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: "center",
  },
  imageContainer: {},
  imageTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  imageSubtitle: {
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
  },
});
