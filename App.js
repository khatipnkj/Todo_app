import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useState } from "react";
import Todoitem from "./Todoitem";
import Additem from "./Additem";
import Footer from "./footer";
import Button from "./Button";

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

  const hndleDeleteSAll = () => {
    const deleteAllArr = data.Todos.filter((todoObj) => {
      if (todoObj.checked !== true) {
        return todoObj;
      }
    });
    setData({
      Todos: [...deleteAllArr],
      currstate: "",
    });
  };

  return (
    <View style={styles.container}>
      <Additem hndleaddbtn={hndleaddbtn} data={data} hndleinput={hndleinput} />
      {data.Todos?.map((todoObj) => (
        <Todoitem
          key={todoObj.id}
          todoObj={todoObj}
          hndledelete={hndledelete}
          hndlecheckbtn={hndlecheckbtn}
        />
      ))}
      <View>
        <Button
          title="Delete Selected"
          hndlebtn={hndleDeleteSAll}
          Color="#DDDDDD"
        />
      </View>
      <Footer
        style={styles.footer}
        total={data.Todos.length}
        Todos={data.Todos}
      />
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
  },
  footer: {
    marginTop: 100,
  },
});
