import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router"; /**to navigate from one route to another. a react component rendering a text with a given href prop */

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Buttons";

const PlaceHolderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={ styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceHolderImage}/>
        </View>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo"/>
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
