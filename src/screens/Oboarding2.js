import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { COLORSPACK } from "../colors/Colors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  FadeInDown,
  FadeInUp,
  Easing,
  withSpring,
  ReduceMotion,
  LightSpeedInRight,
  ZoomIn,
  FadeIn,
  LinearTransition,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import CornerLineButton from "../Components/CornerLineButton";
import WaterEffect from "../Components/WaterEffect";

const images = {
  LAYER1: {
    sourceImage: require("../../assets/backgrounds/breifcase.png"),
    bgColor: COLORSPACK.YELLOW,
    title: "We will",
    title2: "take care",
    subtitle: "of tickets, transfers and a cool place to stay",
  },
  LAYER2: {
    sourceImage: require("../../assets/backgrounds/sunLoungers (4).png"),
    bgColor: COLORSPACK.CYAN,
    title: "Relax",
    title2: "& enjoy",
    subtitle: "Sunbath, swim , eat and drink deliciously",
  },
  LAYER3: {
    sourceImage: require("../../assets/backgrounds/pinkduck.png"),
    bgColor: COLORSPACK.PINK,
    title: "Flexible",
    title2: "payment",
    subtitle: "credit card and transfer, crypto currency",
  },
};

const Oboarding2 = () => {
  const { width } = useWindowDimensions();
  const imageSize = width * 0.7;
  const [isClicked, setIsClicked] = useState(false);
  const titleY = useSharedValue(-90);
  const subY = useSharedValue(90);
  const opacity = useSharedValue(1);
  const [steps, setStep] = useState(1);

  const handleChangeLayout = () => {
    if (steps === 3) {
      setStep(1);
    } else {
      setStep((prev) => prev + 1);
    }
    setIsClicked(true);

    // start
    opacity.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });
    titleY.value = withSpring(-90, {
      duration: 500,
      dampingRatio: 0.7,
      stiffness: 202,
      restDisplacementThreshold: 27.84,
      restSpeedThreshold: 21.71,
      reduceMotion: ReduceMotion.System,
    });
    subY.value = withSpring(90, {
      duration: 500,
      dampingRatio: 0.7,
      stiffness: 202,
      overshootClamping: true,
      restDisplacementThreshold: 27.84,
      restSpeedThreshold: 21.71,
      reduceMotion: ReduceMotion.System,
    });

    // reset
    setTimeout(() => {
      opacity.value = withTiming(1, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
      titleY.value = withSpring(0, {
        duration: 1000,
        dampingRatio: 0.7,
        stiffness: 202,
        restDisplacementThreshold: 27.84,
        restSpeedThreshold: 21.71,
        reduceMotion: ReduceMotion.System,
      });
      subY.value = withSpring(0, {
        duration: 1000,
        dampingRatio: 0.7,
        stiffness: 202,
        restDisplacementThreshold: 27.84,
        restSpeedThreshold: 21.71,
        reduceMotion: ReduceMotion.System,
      });
    }, 1000);
  };

  // headings titles subtitle animation start from here
  const titleStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: titleY.value }],
  }));

  const subStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: subY.value }],
  }));
  // headings titles subtitle animation ends here

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    titleY.value = withSpring(0, {
      duration: 1000,
      dampingRatio: 0.7,
      stiffness: 202,
      restDisplacementThreshold: 27.84,
      restSpeedThreshold: 21.71,
      reduceMotion: ReduceMotion.System,
    });
    subY.value = withSpring(0, {
      duration: 1000,
      dampingRatio: 0.7,
      stiffness: 202,
      overshootClamping: true,
      restDisplacementThreshold: 27.84,
      restSpeedThreshold: 21.71,
      reduceMotion: ReduceMotion.System,
    });
  }, []);

  return (
    <>
      {steps === 1 ? (
        <Animated.View
          style={{ flex: 1 }}
          layout={LinearTransition.duration(7000)}
        >
          {/* bg container back */}
          {
            <View
              style={{ backgroundColor: `${images.LAYER1.bgColor}` }}
              className="flex-1"
            >
              <View style={{ marginTop: 75 }} className="items-center">
                <Image
                  source={images.LAYER1.sourceImage}
                  style={{
                    height: imageSize,
                    width: imageSize,
                    resizeMode: "cover",
                  }}
                />
              </View>

              {/* headings view */}
              <View className="flex-col gap-5 px-6 mt-8 z-30">
                {/* title main */}
                <View>
                  <Animated.View
                    style={[{ flexDirection: "column", gap: 2 }, titleStyle]}
                  >
                    <Text
                      style={{ fontFamily: "MavenPro", fontWeight: "800" }}
                      className="text-6xl ml-8"
                    >
                      {images.LAYER1.title}
                    </Text>
                    <Text
                      style={{ fontFamily: "MavenPro", fontWeight: "800" }}
                      className="text-6xl ml-8"
                    >
                      {images.LAYER1.title2}
                    </Text>
                  </Animated.View>
                </View>
                {/* subtitle */}
                <Animated.View style={subStyle}>
                  <Text
                    style={{ fontFamily: "MavenPro", fontWeight: "400" }}
                    className="font-normal text-gray-600 ml-8 text-xl"
                  >
                    {images.LAYER1.subtitle}
                  </Text>
                </Animated.View>
              </View>
            </View>
          }
          {/* bottom container front */}
          <View className="absolute bg-transparent flex-1 top-0 h-full w-full z-[1000]">
            <View className="flex-col justify-between flex-1 py-20 px-14">
              {/* top layer */}
              <View className="flex-row justify-between items-center">
                <View className="justify-center items-center">
                  <Ionicons name="logo-amplify" size={24} color="black" />
                </View>
                <View className="justify-center items-center">
                  <Text className="font-medium">Skip</Text>
                </View>
              </View>

              {/* bottom layer */}
              <View className="flex-row justify-between items-center">
                <View className="justify-center items-center">
                  <Image
                    source={require("../../assets/meta-logo-12359.png")}
                    style={{ height: 55, width: 55, resizeMode: "cover" }}
                  />
                </View>
                <View className="justify-center items-center">
                  <CornerLineButton
                    handleChangeLayout={handleChangeLayout}
                    borderCol={images.LAYER1.bgColor}
                  />
                </View>
              </View>
            </View>
          </View>

          <View activeOpacity={0.9} className="absolute h-full w-full z-40">
            <WaterEffect
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              bgColor={images.LAYER1.bgColor}
            />
          </View>
        </Animated.View>
      ) : steps === 2 ? (
        <Animated.View
          style={{ flex: 1 }}
          layout={LinearTransition.duration(7000)}
        >
          {/* bg container back */}
          {
            <View
              style={{ backgroundColor: `${images.LAYER2.bgColor}` }}
              className="flex-1"
            >
              <View style={{ marginTop: 75 }} className="items-center">
                <Image
                  source={images.LAYER2.sourceImage}
                  style={{
                    height: imageSize,
                    width: imageSize,
                    resizeMode: "cover",
                  }}
                />
              </View>

              {/* headings view */}
              <View className="flex-col gap-5 px-6 mt-8 z-30">
                {/* title main */}
                <View>
                  <Animated.View
                    style={[{ flexDirection: "column", gap: 2 }, titleStyle]}
                  >
                    <Text
                      style={{ fontFamily: "MavenPro", fontWeight: "800" }}
                      className="text-6xl ml-8"
                    >
                      {images.LAYER2.title}
                    </Text>
                    <Text
                      style={{ fontFamily: "MavenPro", fontWeight: "800" }}
                      className="text-6xl ml-8"
                    >
                      {images.LAYER2.title2}
                    </Text>
                  </Animated.View>
                </View>
                {/* subtitle */}
                <Animated.View style={subStyle}>
                  <Text
                    style={{ fontFamily: "MavenPro", fontWeight: "400" }}
                    className="font-normal text-gray-600 ml-8 text-xl"
                  >
                    {images.LAYER2.subtitle}
                  </Text>
                </Animated.View>
              </View>
            </View>
          }
          {/* bottom container front */}
          <View className="absolute bg-transparent flex-1 top-0 h-full w-full z-[1000]">
            <View className="flex-col justify-between flex-1 py-20 px-14">
              {/* top layer */}
              <View className="flex-row justify-between items-center">
                <View className="justify-center items-center">
                  <Ionicons name="logo-amplify" size={24} color="black" />
                </View>
                <View className="justify-center items-center">
                  <Text className="font-medium">Skip</Text>
                </View>
              </View>

              {/* bottom layer */}
              <View className="flex-row justify-between items-center">
                <View className="justify-center items-center">
                  <Image
                    source={require("../../assets/meta-logo-12359.png")}
                    style={{ height: 55, width: 55, resizeMode: "cover" }}
                  />
                </View>
                <View className="justify-center items-center">
                  <CornerLineButton
                    handleChangeLayout={handleChangeLayout}
                    borderCol={images.LAYER2.bgColor}
                  />
                </View>
              </View>
            </View>
          </View>

          <View activeOpacity={0.9} className="absolute h-full w-full z-40">
            <WaterEffect
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              bgColor={images.LAYER2.bgColor}
            />
          </View>
        </Animated.View>
      ) : steps === 3 ? (
        <Animated.View
          style={{ flex: 1 }}
          layout={LinearTransition.duration(7000)}
        >
          {/* bg container back */}
          {
            <View
              style={{ backgroundColor: `${images.LAYER3.bgColor}` }}
              className="flex-1"
            >
              <View style={{ marginTop: 75 }} className="items-center">
                <Image
                  source={images.LAYER3.sourceImage}
                  style={{
                    height: imageSize,
                    width: imageSize,
                    resizeMode: "cover",
                  }}
                />
              </View>

              {/* headings view */}
              <View className="flex-col gap-5 px-6 mt-8 z-30">
                {/* title main */}
                <View>
                  <Animated.View
                    style={[{ flexDirection: "column", gap: 2 }, titleStyle]}
                  >
                    <Text
                      style={{ fontFamily: "MavenPro", fontWeight: "800" }}
                      className="text-6xl ml-8"
                    >
                      {images.LAYER3.title}
                    </Text>
                    <Text
                      style={{ fontFamily: "MavenPro", fontWeight: "800" }}
                      className="text-6xl ml-8"
                    >
                      {images.LAYER3.title2}
                    </Text>
                  </Animated.View>
                </View>
                {/* subtitle */}
                <Animated.View style={subStyle}>
                  <Text
                    style={{ fontFamily: "MavenPro", fontWeight: "400" }}
                    className="font-normal text-gray-600 ml-8 text-xl"
                  >
                    {images.LAYER3.subtitle}
                  </Text>
                </Animated.View>
              </View>
            </View>
          }
          {/* bottom container front */}
          <View className="absolute bg-transparent flex-1 top-0 h-full w-full z-[1000]">
            <View className="flex-col justify-between flex-1 py-20 px-14">
              {/* top layer */}
              <View className="flex-row justify-between items-center">
                <View className="justify-center items-center">
                  <Ionicons name="logo-amplify" size={24} color="black" />
                </View>
                <View className="justify-center items-center">
                  <Text className="font-medium">Skip</Text>
                </View>
              </View>

              {/* bottom layer */}
              <View className="flex-row justify-between items-center">
                <View className="justify-center items-center">
                  <Image
                    source={require("../../assets/meta-logo-12359.png")}
                    style={{ height: 55, width: 55, resizeMode: "cover" }}
                  />
                </View>
                <View className="justify-center items-center">
                  <CornerLineButton
                    handleChangeLayout={handleChangeLayout}
                    borderCol={images.LAYER3.bgColor}
                  />
                </View>
              </View>
            </View>
          </View>

          <View activeOpacity={0.9} className="absolute h-full w-full z-40">
            <WaterEffect
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              bgColor={images.LAYER3.bgColor}
            />
          </View>
        </Animated.View>
      ) : null}
    </>
  );
};

export default Oboarding2;
