import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import GlobalStyles from "../GlobalStyles";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import BottomTabs, { bottomTabIcons } from "../components/BottomTabs";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("hm->", posts);

  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Header navigation={navigation} />
        <Stories />
        <ScrollView>
          {posts?.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
      <BottomTabs icons={bottomTabIcons} post={posts} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
