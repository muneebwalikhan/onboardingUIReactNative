import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORSPACK } from "../colors/Colors";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../utils/Routes";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        className={`px-6 gap-4 mt-12`}
      >
        {Routes[0].map((route, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(route.routeName)}
              className="p-4 h-100 w-100 rounded-lg bg-white shadow-black shadow-2xl justify-center items-center"
            >
              <Text className="text-xl font-bold text-black">
                {route.screenName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Home;
