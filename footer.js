import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = ({ total, Todos }) => {
  let selected = Todos.reduce((arr, curr) => {
    if (curr.checked == true) {
      arr = arr + 1;
    }
    return arr;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Total = {total}</Text>
      <Text style={styles.txt}>Selected = {selected}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }, 
  txt: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
