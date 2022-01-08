import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { USERS } from "../data/users";
import { firebase, db } from "../firebase";

const Stories = () => {
  const [userProfile, setUserProfile] = useState("");
  console.log("->>>>", userProfile.user, "--", userProfile.profile);
  useEffect(() => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setUserProfile({
            profile: doc.data().profile_picture,
            user: doc.data().username,
          });
        })
      );
    return unsubscribe;
  }, []);
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image source={{ uri: userProfile.profile }} style={styles.story} />
          <Text style={{ color: "white" }}>
            {userProfile?.user?.length > 11
              ? userProfile?.user.slice(0, 10).toLowerCase() + "..."
              : userProfile?.user?.toLowerCase()}
          </Text>
        </View>

        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
