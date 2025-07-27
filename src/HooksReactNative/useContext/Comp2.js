import { View, Text } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "./Context/UseContextHook";

const Comp2 = () => {
  const { userdata2 } = useContext(UserContext);
  return (
    <View className={`px-6 gap-4 mt-12`}>
      <View className="p-4 py-4 border border-black rounded-lg">
        <Text>Name: {userdata2?.name}</Text>
        <Text>Email: {userdata2?.email}</Text>
        <Text>Phone: {userdata2?.phone}</Text>
        <Text>Address: {userdata2?.address}</Text>
        <Text>City: {userdata2?.city}</Text>
        <Text>State: {userdata2?.state}</Text>
        <Text>Country: {userdata2?.country}</Text>
        <Text>Zip: {userdata2?.zip}</Text>
      </View>
    </View>
  );
};

export default Comp2;
