import React, { useState } from "react";
// import { AppLoading } from "expo";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
// import from 'react-native-gesture-handler';
import Details from "./components/Details";
import Liked from "./components/Liked";
import Profile from "./components/Profile";
import GlobeScreen from "./components/GlobeScreen";
import Login from "./components/LoginScreen";
import colors from "./assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EditProfile from "./components/EditProfile";
import DrawerNavigation from "./components/DrawerNavigation";

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const ProfileStack = createStackNavigator();

// the tab navigation
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: styles.tabBar,
        tabBarActiveTintColor: "#F35D38",
        tabBarInactiveTintColor: "#D1D3D2",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="World"
        component={GlobeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="globe" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="heart" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

// profile stack screen component
const ProfileStackScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
        shadowColor: "#fff",
      },
      headerTintColor: "#000",
    }}
  >
    <Stack.Screen
      name="ProfileScreen"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="EditProfile"
      options={{
        title: "Edit Profile",
        headerShown: false,
      }}
      component={EditProfile}
    />
  </Stack.Navigator>
);

// this is the liked screen stack
const LikedStackScreen = ({ navigation }) => {
  <Stack.Navigator>
    <Stack.Screen name="Liked" component={Liked} />
    <Stack.Screen name="Shared Album" component={SharedAlbum} />
  </Stack.Navigator>;
};

// main tab component
const MainTabScreen = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> */}
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default MainTabScreen;
