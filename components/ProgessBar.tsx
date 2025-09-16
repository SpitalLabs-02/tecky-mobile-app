import { MyColors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProgressBarProp {
  width?: number;
  percentageText?: string;
}

const ProgessBar: React.FC<ProgressBarProp> = ({ width, percentageText }) => {
  return (
    <View>
      <Text style={styles.title}>Basic Information</Text>

      {/* Progress Bar */}
      <View style={styles.inActiveProgressBar}>
        {/* Active progress  */}
        <View style={[styles.activeProgressBar, { width: width || 140 }]} />
      </View>
      {/* Percentage indicator */}
      <Text style={styles.percentageText}>
        {percentageText || "45% Completed"}
      </Text>
    </View>
  );
};

export default ProgessBar;

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: MyColors.progressTitleColor,
    fontWeight: "500",
  },
  inActiveProgressBar: {
    height: 4.3,
    borderRadius: 10.33,
    backgroundColor: MyColors.inactiveProgressColor,
  },
  activeProgressBar: {
    height: 4.3,
    borderRadius: 10.33,
    backgroundColor: MyColors.textColor,
  },
  percentageText: {
    fontSize: 10,
    fontWeight: "500",
    color: MyColors.progressTextColor,
  },
});
