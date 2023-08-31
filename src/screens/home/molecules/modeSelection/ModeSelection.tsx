import React, { FC, useState } from "react";
import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import styles from "../../organizer/inputModel/style";
import { color } from "../../../../constants/theme/color";

interface ModeSelectionProps {
  modeChange: (mode: number) => void;
}

const ModeSelection: FC<ModeSelectionProps> = ({modeChange }) => {

  const [mode,setMode] = useState(0);

  const buttonStyle: StyleProp<ViewStyle> = {
    ...styles.button,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: color.white,
  };

  const buttonStyle1: StyleProp<ViewStyle> = {
    ...styles.button,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: color.white,
  };

  const incomeButtonStyle: StyleProp<ViewStyle> = {
    ...buttonStyle1,
    backgroundColor: mode === 0 ? color.lightGreen : color.white,
  };

  const expenseButtonStyle: StyleProp<ViewStyle> = {
    ...buttonStyle,
    backgroundColor: mode === 1 ? color.lightGreen : color.white,
  };

  const labelStyle: StyleProp<ViewStyle> = {
    ...styles.label,
    color: color.greyText,
  };

  const setModeValue =(m:number)=> {
    setMode(m)
    modeChange(m)
  }

  return (
    <View style={styles.headers}>
      <TouchableOpacity
        style={incomeButtonStyle}
        onPress={() => setModeValue(0)}>
        <Text style={labelStyle}>Income</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={expenseButtonStyle}
        onPress={() => setModeValue(1)}>
        <Text style={labelStyle}>Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModeSelection;