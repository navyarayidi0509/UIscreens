import React from "react";
import { Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export function Profile() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Profile Screen</Text>
    </View>
  );
}

