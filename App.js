import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";

const initialdata = {
  Todos: [
    { todo: "Start making a presentation", checked: false, id: 1 },
    { todo: "Pay for rent", checked: false, id: 2 },
    { todo: "Buy a milk", checked: false, id: 3 },
    {
      todo: "Don't forget to pick up Mickael from school",
      checked: false,
      id: 4,
    },
    { todo: "Buy a chocolate for Charlotte", checked: false, id: 5 },
  ],
  currstate: "",
};

export default function App() {
  const [data, setData] = useState(initialdata);

  const hndleinput = (e) => {
    setData({
      ...data,
      currstate: e,
    });
    console.log(data);
  };

  const hndleaddbtn = () => {
    setData({
      Todos: [
        ...data.Todos,
        { todo: data.currstate, checked: false, id: data.Todos.length + 1 },
      ],
      currstate: "",
    });
  };

  const hndledelete = (id) => {
    const newTodos = data.Todos.filter((todoObj) => id !== todoObj.id);
    setData({
      Todos: [...newTodos],
      currstate: "",
    });
  };

  const hndlecheckbtn = (id) => {
    const checkedarr = data.Todos.map((todoObj) => {
      if (id === todoObj.id) {
        todoObj.checked = !todoObj.checked;
      }
      return todoObj;
    });
    setData({
      Todos: [...checkedarr],
      currstate: "",
    });
  };

  const hndleDeleteAll = () => {
    const deleteAllArr = data.Todos.filter((todoObj) => {
      if(todoObj.checked!==true){
        return todoObj
      }
    })
    setData(
      {
        Todos:[...deleteAllArr],
        currstate:''
      }
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TextInput
          style={styles.input}
          value={data.currstate}
          onChangeText={(e) => hndleinput(e)}
        />
        <TouchableOpacity style={styles.button} onPress={hndleaddbtn}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
      </View>
      {data.Todos?.map((todoObj) => (
        <View key={todoObj.id} style={styles.container3}>
          <View style={styles.container2}>
            <TouchableOpacity
              style={todoObj.checked ? styles.checkbtn : styles.checkbtn1}
              onPress={() => hndlecheckbtn(todoObj.id)}
            >
              <Text style={{ fontSize: 15, color: "white" }}></Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 15, marginRight: 10 }}>
              {todoObj.todo}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.deletebtn}
            onPress={() => hndledelete(todoObj.id)}
          >
            <Text style={{ fontSize: 15, color: "white" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View>
        <TouchableOpacity style={styles.button} onPress={hndleDeleteAll}>
          <Text>Delete Selected</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 5,
    // justifyContent: 'center',
  },
  container3: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
  },
  container1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 5,
  },
  input: {
    height: 35,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  deletebtn: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 3,
    width: 80,
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
});
