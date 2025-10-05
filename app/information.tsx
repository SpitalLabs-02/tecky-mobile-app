// @ts-nocheck
import ProgessBar from "@/components/ProgessBar";
import { MyColors } from "@/constants/Colors";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Information = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // State that will handle the option selection
  const [singleAnswer, setSingleAnswer] = useState({});

  const questions = [
    {
      text: "AGE",
      options: ["15-21 years", "22-34 years", "35 and above"],
    },

    {
      text: "HOW MUCH OF TECH DO YOU KNOW?",
      options: [" Very well", "Well", "Not very", "Neutral"],
    },
  ];

  const handleSelect = (questionIndex: number, option: string) => {
    setSingleAnswer((previous) => ({
      ...previous, //Keep previous answers
      [questionIndex]: option, // update only this questions answer
    }));
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/tecky-logo.png")} />

      <ProgessBar />
      <Text style={styles.topText}>Kindly input the following</Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle}>
        <View style={styles.inputContainer}>
          <Text style={styles.questionText}>NAME</Text>

          <TextInput
            placeholder="Enter full name"
            style={styles.input}
            keyboardType="default"
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.questionText}>EMAIL</Text>

          <TextInput
            placeholder="Enter email address"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {questions.map((data, index) => (
          <View key={index} style={styles.mainOptionContainer}>
            <Text style={styles.questionText}>
              {data.text}
              {/* {index + 1}. {data.text} */}
            </Text>
            {data.options.map((option, j) => {
              const selected = singleAnswer[index] === option;

              return (
                <TouchableOpacity
                  key={j}
                  onPress={() => handleSelect(index, option)}
                  style={styles.optionContainer}
                >
                  <Fontisto
                    name={selected ? "radio-btn-active" : "radio-btn-passive"}
                    size={18}
                    color="black"
                  />
                  <Text>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        <Link href={"/information2"} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    padding: 20,
    marginTop: 20
  },
  topText: {
    fontSize: 16,
    fontWeight: "regular",
    color: MyColors.textColor3,
    marginTop: 20,
  },
  questionText: {
    fontSize: 12,
    fontWeight: "regular",
    color: MyColors.textColor,
    marginTop: 4,
  },
  inputContainer: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: MyColors.inputBorderColor,
    borderRadius: 6,
    padding: 16,
    marginTop: 8,
    color: MyColors.textColor3,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: "blue",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  mainOptionContainer: {
    marginTop: 12,
  },
  button: {
    backgroundColor: "#141B34",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    marginTop: 40,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  scrollStyle:{
    paddingBottom: 60
  }
});
