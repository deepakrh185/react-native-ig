import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { firebase, db } from "../firebase";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png",
  },
  // {
  //   name: "Profile",

  //   inactive:
  //     "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
  // },
];

const BottomTabs = ({ icons, post }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setUserProfile(doc.data().profile_picture);
        })
      );
    return unsubscribe;
  }, []);
  console.log("->>", userProfile);
  const Icon = ({ icon, post }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{
          uri: activeTab === icon.name ? icon.active : icon.inactive,
        }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
        <Image source={{ uri: userProfile }} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // position: "absolute",
    // width: "100%",
    // bottom: "3%",
    // zIndex: 999,
    // backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  profilePic: (activeTab = " ") => ({
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: activeTab === "Profile" ? 2 : 0,
  }),
});
export default BottomTabs;
