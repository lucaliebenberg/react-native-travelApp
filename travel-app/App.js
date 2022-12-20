import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./MainTabScreen";

import { DrawerContent } from "./components/DrawerContent";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Onboard from "./components/Onboard";
import LoginScreen from "./components/LoginScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
      {!showOnboard && (
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;

{
  /* <NavigationContainer>
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
        </NavigationContainer> */
}
