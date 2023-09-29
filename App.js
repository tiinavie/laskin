import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TextInput, FlatList } from 'react-native';

export default function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(num1+num2);
  const [data, setData] = useState([]);

  function plus() {
    const newTotal = num1 + num2;
    setSum(newTotal);
    setData([...data, {key: num1 + " + " + num2 + " = " + newTotal}]);
    setNum1('');
    setNum2('');
  }

  function minus() {
    const newTotal = num1 - num2;
    setSum(newTotal);
    setData([...data, {key: num1 + " - " + num2 + " = " + newTotal}]);
    setNum1('');
    setNum2('');
  }

  return (
    <View style={styles.container}>
      <Text>
        Result: {sum}
      </Text>
      <TextInput
        keyboardType="numeric"
        placeholder="number 1"
        style={styles.input}
        value={num1}
        onChangeText = {e => {setNum1(Number.parseInt(e));}}
      />
      <TextInput
        keyboardType="numeric"
        placeholder = "number 2"
        style={styles.input}
        value={num2}
        onChangeText = {e => {setNum2(Number.parseInt(e));}}
      />
      <View style={styles.buttons}>
        <Button title="+" onPress={plus} />
        <Button title="-" onPress={minus} />
      </View>
      <View style={styles.list}>
        <Text>History</Text>
        <FlatList
        data={data}
        renderItem={({item}) =>
          <Text>{item.key}</Text>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style='auto' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 17,
    borderColor: "grey",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },

  buttons: {
    width: Dimensions.get("window").width * 0.2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  input: {
    borderWidth: 1,
    borderColor: "grey",
    display: "flex",
    width: 80,
    margin: 5,
    paddingHorizontal: 3,
  },

  answer: {
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  }
});
