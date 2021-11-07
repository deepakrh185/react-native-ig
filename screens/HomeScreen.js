import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import GlobalStyles from "../GlobalStyles";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import { POSTS } from "../data/Post";
import BottomTabs, { bottomTabIcons } from "../components/BottomTabs";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Header />
        <Stories />
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post post={post} index={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
      <BottomTabs icons={bottomTabIcons} />
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
