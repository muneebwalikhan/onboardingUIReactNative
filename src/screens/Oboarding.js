import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const NextLable = () => {
  return (
    <View className="border-[1.4px] border-[white] px-5 py-2 rounded-lg">
      <Text className="text-xl font-bold text-gray-50">Next</Text>
    </View>
  );
};
const SkipLable = () => {
  return (
    <View className="border border-[#ffffff95] px-4 py-2 rounded-lg">
      <Text className="text-lg font-medium text-white">Skip</Text>
    </View>
  );
};
const DoneButtonComp = ({ ...props }) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View className="pr-8">
        <FontAwesome5 name="arrow-circle-right" size={40} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const Oboarding = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex-1">
      <Onboarding
        onDone={handleDone}
        containerStyles={{ paddingHorizontal: 20 }}
        bottomBarHighlight={false}
        nextLabel={<NextLable />}
        skipLabel={<SkipLable />}
        DoneButtonComponent={DoneButtonComp}
        controlStatusBar={false}
        titleStyles={{ fontSize: 23, fontWeight: "600" }}
        bottomBarHeight={160}
        pages={[
          {
            backgroundColor: "#007aff",
            image: (
              <LottieView
                style={{ width: width, height: width }}
                source={require("../../assets/animations/Team.json")}
                autoPlay
                loop
              />
            ),
            title: "Boost Team Collaboration",
            subtitle:
              "Streamline workflows and enhance productivity with seamless communication tools.",
          },
          {
            backgroundColor: "#f97316",
            image: (
              <LottieView
                style={{ width: width * 0.9, height: width }}
                source={require("../../assets/animations/Interview..json")}
                autoPlay
                loop
              />
            ),
            title: "Easy Onboarding Made Simple",
            subtitle:
              "Get your team up to speed fast with intuitive guides and step-by-step tutorials.",
          },
          {
            backgroundColor: "#ee2141",
            image: (
              <LottieView
                style={{ width: width * 0.9, height: width }}
                source={require("../../assets/animations/Boy working on laptop lottie animation.json")}
                autoPlay
                loop={false}
              />
            ),
            title: "Achieve Your Goals Faster",
            subtitle:
              "Track progress and hit milestones effortlessly using smart goal-setting features.",
          },
        ]}
      />
    </View>
  );
};

export default Oboarding;
