import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle = ({children}: SubtitleProps) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    textAlign: 'center',
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
  }, 
  subTitleContainer: {
    marginVertical: 8,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  }
});
