import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import Button from "./Button";

const Todoitem = ({ todoObj, hndlecheckbtn, hndledelete }) => {
  return (
    <View key={todoObj.id} style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={todoObj.checked ? styles.checkbtn : styles.checkbtn1}
          onPress={() => hndlecheckbtn(todoObj.id)}
        >
          <Text style={{ fontSize: 15, color: "white" }}></Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, marginRight: 10 }}>{todoObj.todo}</Text>
      </View>
      {/* <TouchableOpacity
        style={styles.deletebtn}
        onPress={() => hndledelete(todoObj.id)}
      >
        <Text style={{ fontSize: 15, color: "white" }}>Delete</Text>
      </TouchableOpacity> */}
      <Button title="Delete" hndlebtn={() => hndledelete(todoObj.id)} Color="red"/>
    </View>
  );
};

export default Todoitem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
  },
  container1: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
  },
  checkbtn: {
    borderWidth: 1,
    width: 20,
    height: 20,
    marginRight: 5,
    backgroundColor: "lightblue",
  },
  checkbtn1: {
    borderWidth: 1,
    width: "6%",
    marginRight: 10,
    width: 20,
    height: 20,
  },
  deletebtn: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 3,
    width: 80,
  },
});
