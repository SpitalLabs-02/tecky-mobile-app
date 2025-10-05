
import { responseAtom } from "@/atoms/responseAtom";
import ProgessBar from "@/components/ProgessBar";
import SingleResponse from "@/components/response/SingleResponse";
import { MyColors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import { Link, useRouter } from "expo-router";
import { useAtom } from "jotai";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";


const Information8 = () => {
  const router = useRouter();

  const [response, setResponses] = useAtom(responseAtom);

  const questions = [
    {
      id: "1",
      text: "I want to acquire tech skills that can be applied to both personal and professional projects.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
    },
    {
      id: "2",
      text: "Advancing to leadership or specialized roles in the tech industry is a key career goal for me.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
    },
    {
      id: "3",
      text: "Continuous learning and professional development are essential for my tech career.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
    },
    {
      id: "4",
      text: "Acquiring tech skills that can lead to career growth and advancement is crucial to me.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
    },
    {
      id: "5",
      text: "I am interested in tech skills that can be applied to entrepreneurial or startup ventures.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
    },
    {
      id: "6",
      text: "I want to acquire tech skills that can be recognized and respected by industry leaders.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
    },
  ];

 
  const handleBackButton = () => {
    router.push("/information7");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/tecky-logo.png")} />

      <ProgessBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}
      >
         <SingleResponse
          questions={questions}
          initialAnswers={response}
          onChange={(answers) =>
            setResponses((prev) => ({ ...prev, ...answers }))
          }
        
        />

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
          <Link href={"/information9"} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
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
