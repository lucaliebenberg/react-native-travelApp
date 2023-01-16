import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

import albumPage from "../assets/data/albumPage";
import Card from "./Card";
import Seperator from "./Seperator";

const Liked = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.title}>My Wishlist</Text>
        </View>
        <View style={styles.albumContainer}>
          {albumPage.map((item, index) => (
            <View key={index}>
              <Card item={item} />
              {/* add seperator if index is 1 */}
              {/* {index === 1 && <Seperator />} */}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  albumContainer: {
    flex: 1,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 20,
  },
});

export default Liked;
