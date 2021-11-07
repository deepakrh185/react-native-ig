import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import AddNewPost from "../components/NewPost/AddNewPost";
import GlobalStyles from "../GlobalStyles";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <AddNewPost />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default NewPostScreen;
