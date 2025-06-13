import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface ListProps {
  mealList: string[];
}

const List = ({ mealList }: ListProps) => {
  return mealList.map((listItem) => (
    <View key={listItem} style={styles.listItem}>
      <Text style={styles.itemText}>{listItem}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351201',
    textAlign: 'center',
  }
});
