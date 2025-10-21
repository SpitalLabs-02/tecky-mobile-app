
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

const Information21 = () => {
  const router = useRouter();
  const [response, setResponses] = useAtom(responseAtom);

  const questions = [
    {
      id: "1",
      text: "I have a passion for capturing moments and telling stories through images.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true, 
      extraText: 
      "ON A SCALE OF 1-5 (1 BEING THE LOWEST AND 5 THE HIGHEST) KINDLY RANK THESE STATEMENTS IN THEIR ORDER OF CORRECTNESS", 
           
    },

    {
      id: "2",
      text: "I enjoy experimenting with different lighting setups and techniques.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
      
      
    },
    {
      id: "3",
      text: "I'm interested in learning about different camera equipment and technologies.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
        
    }, 
     {
      id: "4",
      text: "I enjoy editing and post-processing photos and videos.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
        
    },
    
  ];


  const handleBackButton = () => {
    router.push("/information20");
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
          inputStyle={styles.input}
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
          <Link href={"/information22"} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default Information21;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    padding: 20,paddingTop: 60,
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
