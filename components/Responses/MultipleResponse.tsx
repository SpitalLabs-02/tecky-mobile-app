import { MyColors } from "@/constants/Colors";
import { Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextStyle,
    TouchableOpacity,
    View,
} from "react-native";

interface Question {
  id: string;
  text: string;
  options?: (string | number)[];
  type?: "choice" | "input";
  extraText?: string;
  inputTitle?: string;
  rowResponses?: boolean;
}

interface QuestionnaireProps {
  questions: Question[];
  initialAnswers?: Record<string, any>;
  onChange: (answers: Record<string, any>) => void;
  inputStyle?: TextStyle;
}

const MultipleResponse: React.FC<QuestionnaireProps> = ({
  questions,
  initialAnswers = {},
  onChange,
  inputStyle,
}) => {
  const [answers, setAnswers] = useState<Record<string, any>>(initialAnswers);

  const handleSelect = (questionIndex: number, option: string | number) => {
    const currentSelection = answers[questionIndex];

    const updated = currentSelection === option ? null : option;

    const newAnswers = { ...answers, [questionIndex]: updated };
    setAnswers(newAnswers);
    onChange(newAnswers);
  };

  const handleInput = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    onChange(newAnswers);
  };

  return (
    <View>
      {questions.map((data, index) => (
        <View key={index} style={styles.mainOptionContainer}>
          {data.extraText && (
            <Text style={[styles.questionText, {textTransform: 'uppercase'}]}>{data.extraText}</Text>
          )}

          {data.type === "input" && (
            <View>
              <Text style={styles.questionText}>{data.inputTitle}</Text>
              <TextInput
                placeholder="Your answer"
                style={[styles.input, inputStyle]}
                keyboardType="default"
                value={answers[data.id] || ""}
                onChangeText={(text) => handleInput(data.id, text)}
              />
            </View>
          )}

          <Text style={styles.questionText}>
            {data.text}
            {/* {index + 1}. {data.text} */}
          </Text>

          <View style={data.rowResponses ? styles.mainOptionContainer2 : null}>
            {data.options?.map((option, j) => {
              const selected = answers[data.id] === option;

              return (
                <TouchableOpacity
                  key={j}
                  onPress={() => handleSelect(data.id as any, option)}
                  style={data.rowResponses ? styles.rowResponseStyle : styles.optionContainer}
                >
                  <Fontisto
                    name={selected ? "radio-btn-active" : "radio-btn-passive"}
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
  );
};

export default MultipleResponse;

const styles = StyleSheet.create({
  questionText: {
    fontSize: 12,
    fontWeight: "regular",
    color: MyColors.textColor,
    marginTop: 4,
    // textTransform: "uppercase",
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

  input: {
    borderBottomWidth: 1,
    borderBottomColor: MyColors.inputBorderColor,
    padding: 16,
    marginTop: 8,
    color: MyColors.textColor3,
  },
  rowResponseStyle: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    gap: 5,
  },
});
