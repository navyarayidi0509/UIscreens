import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile } from "./Screens/S4";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const tab=createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">*/}
      {/* <Drawer.Navigator initialRouteName="Home"> */}
      <tab.Navigator>
        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Profile" component={Profile} />
      </tab.Navigator>
      {/* </Drawer.Navigator> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
