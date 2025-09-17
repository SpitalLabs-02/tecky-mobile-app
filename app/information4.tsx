// @ts-nocheck
import ProgessBar from "@/components/ProgessBar";
import { MyColors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Information4 = () => {
  const router = useRouter();
  // State that will handle the option selection
  const [multipleAnswer, setMultipleAnswer] = useState({});

  const questions = [
    {
      text: "I am interested in understanding how technology can improve people's lives and experiences, thereby enabling to make positive impacts or changes in the Society",
      options: [1, 2, 3, 4, 5],
    },

    {
      text: "I enjoy collaborating with others to develop innovative tech solutions.",
      options: [1, 2, 3, 4, 5],
    },
    {
      text: "I am willing to dedicate a significant amount of time to learn a new tech skill.",
      options: [1, 2, 3, 4, 5],
    },
    {
      text: "I prefer tech skills with a gentle learning curve.",
      options: [1, 2, 3, 4, 5],
    },
  ];

  const handleSelect = (questionIndex: number, option: string) => {
    setMultipleAnswer((previous) => {
      const currentSelection = previous[questionIndex] || [];

      if (currentSelection.includes(option)) {
        return {
          ...previous,
          [questionIndex]: currentSelection.filter((ans) => ans !== option),
        };
      } else {
        return {
          ...previous,
          [questionIndex]: [...currentSelection, option],
        };
      }
    });
  };

  const handleBackButton = () => {
    router.push("/information3");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/tecky-logo.png")} />

      <ProgessBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}
      >
        {/* QUESTION AND OPTION SECTION */}
        <View style={{ marginTop: 20 }}>
          {questions.map((data, index) => (
            <View key={index} style={styles.mainOptionContainer}>
              {index === 2 && (
                <Text style={styles.questionText}>
                  On a scale of 1-5 (1 being the lowest and 5 the highest)
                  kindly rank these statements in their order of correctness)
                </Text>
              )}
              <Text style={[styles.questionText, { textTransform: "none" }]}>
                {data.text}
                {/* {index + 1}. {data.text} */}
              </Text>

              <View style={styles.mainOptionContainer2}>
                {data.options.map((option, j) => {
                  const selected = multipleAnswer[index]?.includes(option);

                  return (
                    <TouchableOpacity
                      key={j}
                      onPress={() => handleSelect(index, option)}
                      style={[
                        styles.optionContainer,
                        { flexDirection: "column", gap: 5 },
                      ]}
                    >
                      <MaterialCommunityIcons
                        name={
                          selected
                            ? "checkbox-intermediate"
                            : "checkbox-blank-outline"
                        }
                        size={24}
                        color="black"
                      />
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          ))}
        </View>

        {/* The back and next container */}
        <View style={styles.backNextContainer}>
          {/* Back button */}
          <TouchableOpacity style={styles.button2} onPress={handleBackButton}>
            <Feather name="arrow-left" size={24} color={MyColors.textColor} />
            <Text style={[styles.buttonText, { color: MyColors.textColor }]}>
              Back
            </Text>
          </TouchableOpacity>

          {/* Next */}
          <Link href={"/information5"} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default Information4;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    padding: 20,
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
    textTransform: "uppercase",
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
  mainOptionContainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    backgroundColor: MyColors.textColor,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    width: 150,
  },
  button2: {
    borderWidth: 1,
    borderColor: MyColors.textColor,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  subText: {
    fontSize: 10,
    fontWeight: "400",
    color: MyColors.subTextColor,
    marginBottom: 12,
  },
  scrollStyle: {
    paddingBottom: 60,
  },
  backNextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 60,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: MyColors.inputBorderColor,
    padding: 16,
    marginTop: 8,
    color: MyColors.textColor3,
  },
});
