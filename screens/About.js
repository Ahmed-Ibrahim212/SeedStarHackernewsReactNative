import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { Linking } from "react-native";

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={{ color: "#000", marginHorizontal: 10, marginTop: 50 }}>
          Home
        </Text>
      </Pressable>

      <View style={{ alignItems: "center" }}>
        <Image
          style={{ marginTop: 10, width: 180, height: 180, borderRadius: 200 }}
          source={require("../assets/ahmed.jpeg")}
        />
      </View>

      <Text style={styles.headerText}>Ahmed Ibrahim</Text>

      <Text style={styles.titleText}>About Me</Text>

      <Text style={styles.fieldText}>
        {" "}
        I thrive in a fast face environment, so right now am looking for an
        opportunity to apply my technical skills at an innovative company like
        yours. I also describe myself as a person with a versatile skill set, a
        lot of integrity, and a willingness to go the extra mile to satisfy a
        customer.{" "}
      </Text>

      <Text style={styles.fieldText}>Phone: 08166537459</Text>
      <Text
        onPress={async () => {
          await Linking.openURL("https://github.com/Ahmed-Ibrahim212");
        }}
        style={{ fontSize: 16, color: "#050C47" }}
      >
        Github:Ahmed-Ibrahim212
      </Text>
      <Text style={styles.fieldText}>ahmedo.ibrahim1954@gmail.com</Text>

      <Text style={styles.titleText}>Technologies</Text>

      <Text style={{ fontStyle: "italic", color: "#000", marginVertical: 5 }}>
        Kotlin, Android SDK, Android Studio, Coreldraw, React Native,
        Javascript, CSS.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 24,
    marginTop: 20,
  },

  headerText: {
    fontSize: 35,
    color: "#000",
    fontWeight: "bold",
    marginVertical: 15,
  },
  titleText: {
    fontSize: 20,
    color: "#050C47",
    fontWeight: "500",
    marginVertical: 5,
  },

  fieldText: {
    fontSize: 16,
    color: "#000",
    marginVertical: 2,
  },
});
