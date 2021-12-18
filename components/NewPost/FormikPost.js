import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { TextInput } from "react-native";
import validUrl from "valid-url";

const PLACEHOLDER_IMG =
  "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  Caption: Yup.string().max(2200, "Caption has reached the character limit"),
});

const FormikPost = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{ Caption: " ", imageUrl: " " }}
      onSubmit={(values) => {
        console.log(values);
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PLACEHOLDER_IMG,
              }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                style={{ color: "white", fontSize: 18 }}
                onChangeText={handleChange("Caption")}
                onBlur={handleBlur("Caption")}
                value={values.Caption}
              />
            </View>
          </View>
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            placeholder="Enter Image URl"
            placeholderTextColor="gray"
            style={{ color: "white", fontSize: 18, marginBottom: 10 }}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red", marginBottom: 10 }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPost;
