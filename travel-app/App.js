import React, { useState } from "react";
// import { AppLoading } from "expo";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import "react-native-gesture-handler";

import Home from "./components/Home";
import Details from "./components/Details";
import Liked from "./components/Liked";
import Profile from "./components/Profile";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

export default App;
