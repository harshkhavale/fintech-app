import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
  return (
    <View style={styles.container}>
      {assets && (
        <Video
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>
      <View style={styles.buttons}>
        <Link
          href={"/login"}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
              Login
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"/signup"}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: "white" },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>Signup</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    zIndex: 100,
    marginTop: 80,
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
});

export default Page;
