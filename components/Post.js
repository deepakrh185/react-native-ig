import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { firebase, db } from "../firebase";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    likedImageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ff0000/like--v1.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/material-outlined/60/ffffff/speech-bubble--v2.png",
  },
  {
    name: "Share",
    imageUrl: "https://img.icons8.com/ios-glyphs/60/ffffff/paper-plane.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/material-outlined/60/ffffff/bookmark-ribbon--v2.png",
  },
];

const Post = ({ post }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .collection("comments")
      .onSnapshot((snapshot) => {
        setComment(snapshot.docs.map((doc) => doc.data()));
      });
  });
  console.log(comment);

  {
    comment.map((comment) => console.log(comment));
  }
  const handleLike = async (post) => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    );
    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .update({
        likes_by_users: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(
              firebase.auth().currentUser.email
            )
          : firebase.firestore.FieldValue.arrayRemove(
              firebase.auth().currentUser.email
            ),
      })
      .then(() => {
        console.log("Document successfully updated");
      })
      .error((error) => {
        console.log("Error updating Document", error);
      });
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter handleLike={handleLike} post={post} />
        <Likes post={post} />
        <Caption post={post} />
      </View>
    </View>
  );
};
const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "700" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ handleLike, post }) => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.footerLeftContainer}>
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image
          style={styles.footerIcon}
          source={{
            uri: post?.likes_by_users?.includes(
              firebase.auth().currentUser.email
            )
              ? postFooterIcons[0].likedImageUrl
              : postFooterIcons[0].imageUrl,
          }}
        />
      </TouchableOpacity>

      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon
        imgStyle={[styles.footerIcon, styles.shareIcon]}
        imgUrl={postFooterIcons[2].imageUrl}
      />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "700" }}>
      {post.likes_by_users?.length.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ color: "white", fontWeight: "700" }}>{post.user}</Text>
      <Text style={{ color: "white" }}> {post.caption}</Text>
    </Text>
  </View>
);

// const CommentSession = ({ post }) => (
//   <View style={{ marginTop: 5 }}>
//     {!!post.comments.length && (
//       <Text style={{ color: "gray" }}>
//         View{post.comments.length > 1 ? " all " : " "}
//         {post.comments.length}{" "}
//         {post.comments.length > 1 ? "comments" : "comment"}
//       </Text>
//     )}
//   </View>
// );

const Comments = ({ post }) => (
  <View style={{ flexDirection: "row" }} >
    <Text style={{ color: "white", fontWeight: "700" }}>{post.user}</Text>

    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", marginLeft: 12 }}>{comment}</Text>
      </View>
    ))}
  </View>
);
const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  footerLeftContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
    marginLeft: 3,
  },
});
export default Post;
