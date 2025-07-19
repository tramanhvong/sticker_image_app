import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router"; /**to navigate from one route to another. a react component rendering a text with a given href prop */
import { useState } from "react";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Buttons";

import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={ styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        </View>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
          <Button label="Use this photo"/>
        </View>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style={styles.button}>Go to About screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    padding:28,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
})
