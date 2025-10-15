import { MyColors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Information23 = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Image at the top */}
      <Image
        source={require("../assets/images/confirmation.png")} // 👈 Replace with your image name
        style={styles.image}
        resizeMode="contain"
      />

      {/* Confirmation Text */}
      <Text style={styles.title}>Assessment Submitted</Text>
      <Text style={styles.subtitle}>
        Thank you for taking this assessment. An email will be sent to you
        shortly with the possible tech skill.
      </Text>

      {/* Button to return to home or start again */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/how-it-works')}
      >
        <Text style={styles.buttonText}>Return Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Information23;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: MyColors.textColor,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: MyColors.textColor3,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: MyColors.textColor,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
