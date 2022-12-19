import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import albumPage from "../assets/data/albumPage";
import Card from "./Card";
import Seperator from "./Seperator";

const Liked = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={styles.albumContainer}>
          {albumPage.map((item, index) => (
            <View key={index}>
              <Card item={item} navigation={navigation} />
              {/* add seperator if index is 1 */}
              {index === 1 && <Seperator />}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  albumContainer: {
    flex: 1,
    marginBottom: 32,
  },
});

export default Liked;
