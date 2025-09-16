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

const Information2 = () => {
  const router = useRouter();
  // State that will handle the option selection
  const [multipleAnswer, setMultipleAnswer] = useState({});

  const questions = [
    {
      text: "What excites you about Tech?",
      options: [
        "Softwares",
        "Computers, Servers, & Appliances",
        "Designs & Visuals",
        "Data & Interpretation",
        "Drawings & CGIs (Computer Generated Images)",
      ],
    },

    {
      text: "Why are you considering a tech training?",
      options: [
        "Career Advancement",
        "It is trending",
        "Improve my competence and make things easy",
        "Make the right decision",
        "Communicate my ideas and thoughts visually",
      ],
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
    router.push("/information");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/tecky-logo.png")} />

      <ProgessBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}
      >
        {questions.map((data, index) => (
          <View key={index} style={styles.mainOptionContainer}>
            <Text style={styles.questionText}>
               {data.text}
              {/* {index + 1}. {data.text} */}
            </Text>
            <Text style={styles.subText}>
              You can choose more than ONE option
            </Text>
            {data.options.map((option, j) => {
              const selected = multipleAnswer[index]?.includes(option);

              return (
                <TouchableOpacity
                  key={j}
                  onPress={() => handleSelect(index, option)}
                  style={styles.optionContainer}
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
        ))}

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
          <Link href={"/information3"} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default Information2;

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
    gap: 8
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
});
