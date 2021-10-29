import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";
import Header from "../components/Header";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Header />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
