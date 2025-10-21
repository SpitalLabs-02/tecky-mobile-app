// @ts-nocheck
import { responseAtom } from "@/atoms/responseAtom";
import ConfirmModal from "@/components/ConfirmModal";
import CustomLoader from "@/components/CustomLoader";
import ProgessBar from "@/components/ProgessBar";
import SingleResponse from "@/components/response/SingleResponse";
import { MyColors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Information22 = () => {
  const router = useRouter();
  const [response, setResponses] = useAtom(responseAtom);
  const [isConfirmModal, setIsConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      id: "1",
      text: "I enjoy collaborating with others on telling stories",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
    },

    {
      id: "2",
      text: "I am interested in using image capture and designs to tell stories and convey messages.",
      options: [1, 2, 3, 4, 5],
      rowResponses: true,
    },
    {
      id: "3",

      text: "ANY OTHER THING YOU WOULD TO SHARE WITH US BORDERING ON TECH?",
    },
    {
      id: "4",

      type: "input",
    },
  ];

  const handleBackButton = () => {
    router.push("/information21");
  };

  // Handle Submit function
  const handleSubmit = () => {
    setLoading(true);
    setIsConfirmModal(false);
    setTimeout(() => {
      setLoading(false);
      router.push("/information23");
    }, 5000);
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsConfirmModal(true)}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isConfirmModal && (
        <ConfirmModal
          isVisible={isConfirmModal}
          title="Are you sure?"
          description="Kindly cross check properly before submitting the assessment."
          onCancel={() => setIsConfirmModal(false)}
          onConfirm={handleSubmit}
        />
      )}
      {loading && <CustomLoader isVisible={loading} />}
    </View>
  );
};

export default Information22;

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
