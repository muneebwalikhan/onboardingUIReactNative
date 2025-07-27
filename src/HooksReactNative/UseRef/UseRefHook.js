import { View, Text, TextInput, Keyboard, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Divider = () => {
  return <View className="my-6 h-2 w-full bg-red-500 border"></View>;
};

const UseRefHook = () => {
  const [COUNT, setCOUNT] = useState(0);
  const [timer, settimer] = useState(0);
  // const [previousCount, setpreviousCount] = useState(null)
  const prevRef = useRef(0);
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const intervalRef = useRef(null);
console.log(inputRef);

  useEffect(() => {
    // setpreviousCount(COUNT)
    prevRef.current = COUNT;
  }, [COUNT]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      settimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="justify-center items-center mt-20">
          <Text className="text-2xl font-bold mb-4">
            Current Count: {COUNT}
          </Text>
          <Text className="text-2xl font-bold mb-4">
            Prev Count: {prevRef.current}
          </Text>
          <Text className="text-2xl" onPress={() => setCOUNT(COUNT + 1)}>
            Increase Count
          </Text>
        </View>

        <Divider />
        <View className="w-full px-4 mt-8">
          <TextInput
            onSubmitEditing={() => inputRef2.current.focus()}
            ref={inputRef}
            className="w-full h-12 rounded-lg border-2 px-4"
          />
          <TextInput
            ref={inputRef2}
            onSubmitEditing={() => Keyboard.dismiss()}
            className="w-full h-12 rounded-lg border-2 px-4 my-2"
          />
          <View className="mt-2">
            <Button
              onPress={() => inputRef.current.focus()}
              title="Focus Input"
            />
          </View>
        </View>
        <Divider />

        <View className="justify-center items-center mt-8">
          <Text className="text-2xl font-bold mb-4">Timer: {timer}</Text>
          <View className="mt-2">
            <Button
              onPress={() => clearInterval(intervalRef.current)}
              title="Stop Timer"
            />
          </View>
        </View>
        <Divider />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UseRefHook;
