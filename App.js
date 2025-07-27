import { View, Text } from "react-native";
import React from "react";
import "./global.css";
import MainNavigator from "./src/MainNavigator";
import UseContextHook from "./src/HooksReactNative/useContext/Context/UseContextHook";

const App = () => {
  return (
    <UseContextHook>
      <MainNavigator />
    </UseContextHook>
  );
};

export default App;
