import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../GlobalStyles";

function HomeScreen() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Text>Home screen</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
