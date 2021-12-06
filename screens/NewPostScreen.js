import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import AddNewPost from "../components/NewPost/AddNewPost";
import GlobalStyles from "../GlobalStyles";

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <AddNewPost navigation={navigation} />
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
