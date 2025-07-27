import { View, Text } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "./Context/UseContextHook";

const Comp1 = () => {
  const {userdata} = useContext(UserContext);
  return (
    <View className={`px-6 gap-4 mt-12`}>
      <View className="p-4 py-4 border border-black rounded-lg">
        <Text>Name: {userdata?.name}</Text>
        <Text>Email: {userdata?.email}</Text>
        <Text>Phone: {userdata?.phone}</Text>
        <Text>Address: {userdata?.address}</Text>
        <Text>City: {userdata?.city}</Text>
        <Text>State: {userdata?.state}</Text>
        <Text>Country: {userdata?.country}</Text>
        <Text>Zip: {userdata?.zip}</Text>
      </View>
    </View>
  );
};

export default Comp1;
