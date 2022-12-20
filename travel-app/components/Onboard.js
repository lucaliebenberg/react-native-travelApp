import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../assets/colors/colors";
import AppIntroSlider from "react-native-app-intro-slider";

const data = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes, assignments, quizzes and more",
    image: require("../assets/images/Onboard1.png"),
    bg: "#59b2ab",
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress, increase your productivity",
    image: require("../assets/images/Onboard2.png"),
    bg: "#febe29",
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    image: require("../assets/images/Onboard3.png"),
    bg: "#22bcb5",
  },
];

const Onboard = (props) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Done</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
    height: 400,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 60,
    color: colors.black,
  },
  text: {
    textAlign: "center",
    marginVertical: 30,
    marginTop: 20,
    marginHorizontal: 60,
    color: colors.grey,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  rightText: {
    color: colors.blue,
    fontWeight: "bold",
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  leftText: {
    color: colors.blue,
    fontWeight: "bold",
    fontSize: 14,
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
});

export default Onboard;
