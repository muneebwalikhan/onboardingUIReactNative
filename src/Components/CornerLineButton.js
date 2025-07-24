import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORSPACK } from "../colors/Colors";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function StepFlowButton({handleChangeLayout,borderCol}) {
  const [currentStep, setCurrentStep] = useState(1);
  const progress = useSharedValue(0.25);

  const handlePress = () => {
    handleChangeLayout()
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
      progress.value = withTiming((currentStep + 1) / 4, {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      setCurrentStep(1);
      progress.value = withTiming(0.25, { duration: 300 });
    }
  };
  const animatedProps = useAnimatedProps(() => {
    const width = 48;
    const radius = 12;
    const gap = 4

    const stepSize = width - 2 * radius + (Math.PI * radius) / 2;
    const totalLength = stepSize * 4;
    const pathLength = Math.min(progress.value * 4 * stepSize, totalLength);

    return {
      strokeDasharray: `${pathLength} ${totalLength}`,
      strokeDashoffset: 0,
    };
  });

  return (
    <View className="w-16 h-16 rounded-2xl bg-white justify-center items-center">
      <Pressable
        onPress={handlePress}
        className="w-full h-full justify-center items-center"
      >
        <Text className="font-medium text-2xl text-gray-700">{`>`}</Text>

        <View className="absolute inset-0 justify-center items-center">
          <Svg width="56" height="56" viewBox="0 0 56 56">
            <AnimatedPath
              d="M 16 4 L 40 4 Q 52 4 52 16 L 52 40 Q 52 52 40 52 L 16 52 Q 4 52 4 40 L 4 16 Q 4 4 16 4 Z"
              fill="none"
              stroke={borderCol}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              animatedProps={animatedProps}
            />
          </Svg>
        </View>
      </Pressable>
    </View>
  );
}
