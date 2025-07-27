import { View, Text, TouchableOpacity } from "react-native";
import { Routes } from "../../utils/Routes";
import { useNavigation } from "@react-navigation/native";

const ParentContext = () => {
  const navigation = useNavigation();

  return (
    <View className={`px-6 gap-4 mt-12`}>
      {Routes[1].map((route, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.routeName)}
            className="p-4 h-100 w-100 rounded-lg bg-gray-500 shadow-black shadow-2xl justify-center items-center"
          >
            <Text className="text-xl font-bold text-white">
              {route.screenName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ParentContext;
