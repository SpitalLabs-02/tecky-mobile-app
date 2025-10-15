import { MyColors } from "@/constants/Colors";
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ConfirmModalProp {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

const ConfirmModal: React.FC<ConfirmModalProp> = ({
  isVisible,
  onCancel,
  onConfirm,
  title,
  description,
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.description}> {description} </Text>
          <View style={styles.buttonContainer}>
            {/* Cancel button */}
            <TouchableOpacity style={styles.button2} onPress={onCancel}>
              <Text style={[styles.buttonText, { color: MyColors.textColor }]}>
                Cancel
              </Text>
            </TouchableOpacity>

            {/* Submit */}
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: MyColors.textColor,
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    fontWeight: "regular",
    color: "black",
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: MyColors.textColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    width: 130,
  },
   button2: {
    borderWidth: 1,
    borderColor: MyColors.textColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    width: 130,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
