import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import colors from "../assets/colors/colors";

import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import activitiesData from "../assets/data/activitiesData";
import discoverCategoriesData from "../assets/data/discoverCategoriesData";
import discoverData from "../assets/data/discoverData";
import learnMoreData from "../assets/data/learnMoreData";
import forYouData from "../assets/data/forYouData";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "../assets/images/person.png";
import { auth } from "../firebaseConfig";

import DrawerNavigation from "./DrawerNavigation";

Feather.loadFont();

const HomeScreen = ({ navigation }) => {
  const renderDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            { marginLeft: item.id === "discover-1" ? 20 : 0 },
          ]}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderActivityItem = ({ item }) => {
    return (
      <View
        style={[
          styles.activityItemWrapper,
          {
            marginLeft: item.id === "activities-1" ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.learnMoreItem,
            {
              marginLeft: item.id === "learnMore-1" ? 20 : 0,
            },
          ]}
          imageStyle={styles.learnMoreItemImage}
        >
          <Text style={styles.learnMoreItemText}>{item.title}</Text>
          <View style={styles.learnMoreItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.learnMoreItemLocationText}>
              {item.location}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderForYouItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.learnMoreItem,
            {
              marginLeft: item.id === "forYou-1" ? 20 : 0,
            },
          ]}
          imageStyle={styles.learnMoreItemImage}
        >
          <Text style={styles.forYouItemText}>{item.title}</Text>
          <View style={styles.forYouItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.learnMoreItemLocationText}>
              {item.location}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={32}
                color={colors.black}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={profile} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            {/* <Text
              style={[styles.discoverCategoryText, { color: colors.orange }]}
            >
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text> */}
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* For You */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>For You</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={forYouData}
              renderItem={renderForYouItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {},
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  // discover styling
  discoverWrapper: {
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 14,
    color: colors.white,
  },
  // activities styling
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemsWrapper: {},
  activityItemWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
    paddingVertical: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 14,
    color: colors.gray,
  },
  // learn more styling
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 2,
  },
  learnMoreItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
    marginLeft: 5,
    marginBottom: 7,
  },
  learnMoreItemLocationText: {
    marginLeft: 4,
    fontWeight: "bold",
    fontSize: 14,
    color: colors.white,
  },
  // for you styling
  forYouItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginBottom: 7,
  },
  forYouItemLocationText: {
    marginLeft: 4,
    fontWeight: "bold",
    fontSize: 14,
    color: colors.white,
  },
  forYouItemText: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default HomeScreen;
