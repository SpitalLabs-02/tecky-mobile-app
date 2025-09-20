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
import { SafeAreaView } from "react-native-safe-area-context";

const Information8 = () => {
  const router = useRouter();
  const [multipleAnswer, setMultipleAnswer] = useState({});

  const questions = [
    {
      text: "I want to acquire tech skills that can be applied to both personal and professional projects.",
      options: [1, 2, 3, 4, 5],
    },
    {
      text: "Advancing to leadership or specialized roles in the tech industry is a key career goal for me.",
      options: [1, 2, 3, 4, 5],
    },
    {
      text: "Continuous learning and professional development are essential for my tech career.",
      options: [1, 2, 3, 4, 5],
    },
    {
      text: "Acquiring tech skills that can lead to career growth and advancement is crucial to me.",
      options: [1, 2, 3, 4, 5],
    },
    {
      text: "I am interested in tech skills that can be applied to entrepreneurial or startup ventures.",
      options: [1, 2, 3, 4, 5],
    },
    {
      text: "I want to acquire tech skills that can be recognized and respected by industry leaders.",
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
    router.push("/information7");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
                {index === 1 && (
                  <Text style={styles.questionText}>
                    On a scale of 1-5 (1 being the lowest and 5 the highest) kindly rank these statements in their order of correctness
                  </Text>
                )}
                <Text style={[styles.questionText, { textTransform: "none" }]}>
                  {data.text}
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
        </ScrollView>

        {/* Fixed Back and Next buttons at bottom */}
        <View style={styles.backNextContainer}>
          <TouchableOpacity style={styles.button2} onPress={handleBackButton}>
            <Feather name="arrow-left" size={24} color={MyColors.textColor} />
            <Text style={[styles.buttonText, { color: MyColors.textColor }]}>
              Back
            </Text>
          </TouchableOpacity>

          <Link href={"/information9"} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Information8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  questionText: {
    fontSize: 12,
    fontWeight: "400",
    color: MyColors.textColor,
    marginTop: 4,
    textTransform: "uppercase",
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
    marginTop: 5,
  },
  button: {
    backgroundColor: MyColors.textColor,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
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
  scrollStyle: {
    paddingBottom: 20,
  },
  backNextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
});
