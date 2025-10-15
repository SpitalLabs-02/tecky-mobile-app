import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";

interface CustomLoaderProp {
  isVisible: boolean;
}

const CustomLoader: React.FC<CustomLoaderProp> = ({ isVisible }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <View style={styles.modalOverlay}>
        <ActivityIndicator size="large" color={"white"} />
      </View>
    </Modal>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
