import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { ApiCall } from "./components/api";

const data = [
  "List1",
  "List2",
  "List3",
  "List4",
  "List5",
  "List6",
  "List7",
  "List8",
  "List9",
  "List10",
];

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(data);

  function onchangeFunction(e) {
    setText(e);
  }

  function onClickButton() {
    setItems((current) => [...current, text]);
    setText("");
  }

  function handlePressRemove(e) {
    console.log(e);
    setItems((prevList) => prevList.filter((item, index) => index !== e));
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onchangeFunction}
          placeholder="Your skills"
          placeholderTextColor={"#000"}
          value={text}
        />
        <Button title="Add Skills" onPress={onClickButton} />
      </View>

      <View
        style={{
          paddingTop: 30,
          flex: 1,
        }}
      >
        <FlatList
          data={items}
          renderItem={(item) => (
            <Pressable onPress={() => handlePressRemove(item.index)}>
              <Text style={styles.listText}>{item.item}</Text>
            </Pressable>
          )}
        />
      </View>
      <View style={styles.apiContainer}>
        <ApiCall />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#a1a1a1",
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#5190e4",
    flex: 1,
    paddingLeft: 10,
  },
  listText: {
    borderRadius: 1.5,
    padding: 20,
    marginBottom: 10,
    color: "#fff",
    fontSize: 20,
    borderColor: "#3e3e",
    backgroundColor: "#4e88f3",
  },
  apiContainer: {
    marginTop: 20,
    flex: 2,
  },
});
