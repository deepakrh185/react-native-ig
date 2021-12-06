import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FormikPost from "./FormikPost";

const AddNewPost = ({ navigation }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <FormikPost />
  </View>
);

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 27.5,
  },
});

export default AddNewPost;
