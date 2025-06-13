import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  onPress: () => void;
  ionIcon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const IconButton = ({ onPress, ionIcon, color }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [pressed && styles.pressed]}>
        <Ionicons name={ionIcon} size={25} color={color} style={styles.button}/>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {opacity: 0.7},
  button: {padding: 4,}
});
