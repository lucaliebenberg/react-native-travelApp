import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./MainTabScreen";

import { DrawerContent } from "./components/DrawerContent";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="HomeDrawer"
          component={MainTabScreen}
          options={{
            headerTitle: "",
            headerBackgroundColor: "#white",
            // headerLeft: () => (
            //   <Icon.Button
            //     name="menu"
            //     size={25}
            //     backgroundColor="#fff"
            //     color="#000"
            //     onPress={() => {}}
            //   />
            // ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
