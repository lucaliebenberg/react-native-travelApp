import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { DrawerContent } from "./components/DrawerContent";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Onboard from "./components/Onboard";
import MainTabScreen from "./MainTabScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = ({ navigation }) => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  const authStack = () => {
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
        name="Log In"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Sign Up"
        options={{
          title: "Sign Up",
          headerShown: false,
        }}
        component={SignupScreen}
      />
    </Stack.Navigator>;
  };

  return (
    <>
      <NavigationContainer>
        {/* <LoginScreen /> */}
        <SignupScreen />
      </NavigationContainer>

      {/* {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
      {!showOnboard && (
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen
              name="HomeDrawer"
              component={MainTabScreen}
              options={{
                headerTitle: "",
                headerBackgroundColor: "#white",
                headerShown: false,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      )} */}
    </>
  );
};

export default App;

{
  /*     <NavigationContainer>
          <LoginScreen navigation={navigation} />
        </NavigationContainer> */
}
