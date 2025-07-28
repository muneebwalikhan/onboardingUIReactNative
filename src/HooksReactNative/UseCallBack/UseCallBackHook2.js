import React, { useCallback, useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Child = React.memo(({ handleClick }) => {
  console.log("Child re-rendered");
  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.buttonText}>Increment</Text>
    </TouchableOpacity>
  );
});

const UseCallBackHook2 = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  // Function is created on every render
  const handleClick = useCallback(()=> {
    console.log("handle click");
    setCount((prev) => prev + 1);
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Child handleClick={handleClick} />
      <TouchableOpacity style={styles.button} onPress={() => setTheme(!theme)}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default UseCallBackHook2;
