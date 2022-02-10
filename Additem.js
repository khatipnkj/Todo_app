import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import React from "react";
import Button from "./Button";

const Additem = ({ hndleaddbtn, data, hndleinput }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={data.currstate}
        onChangeText={(e) => hndleinput(e)}
      />
      <Button title="Add Todo" hndlebtn={hndleaddbtn} Color="#DDDDDD"/>
    </View>
  );
};

export default Additem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  input: {
    height: 35,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
  },
});
