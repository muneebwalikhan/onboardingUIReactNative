import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import { COLORSPACK } from "../colors/Colors";
import { useEffect } from "react";

const { width, height } = Dimensions.get("window");
const screenMaxRadius = Math.sqrt(width ** 2 + height ** 2);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function WaterEffect({ isClicked, setIsClicked, bgColor }) {
  const radius = useSharedValue(0);
  const opacity = useSharedValue(1);

  const animatedProps = useAnimatedProps(() => ({
    r: radius.value,
    opacity: opacity.value,
  }));


  const handlepress = () => {
    opacity.value = withTiming(1, { duration: 100 });

    // stsrt
    radius.value = withSpring(screenMaxRadius, {
      damping: 8,
      stiffness: 60,
      mass: 0.4,
      overshootClamping: true,
      duration: 6000,
    });

    // reset
    setTimeout(() => {
      radius.value = withSpring(0, {
        damping: 8,
        stiffness: 60,
        mass: 0.4,
        overshootClamping: false,
      });
    }, 1000);

    // hide after completed
    setTimeout(() => {
      opacity.value = withTiming(0, { duration: 100 });
    }, 500);
  };

  useEffect(() => {
    if (isClicked) {
      handlepress();
    }
    setIsClicked(false);
  }, [isClicked]);

  return (
    <Svg style={{ flex: 1 }}>
      <Defs>
        <LinearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={COLORSPACK.YELLOW} />
          <Stop offset="50%" stopColor={COLORSPACK.CYAN} />
          <Stop offset="100%" stopColor={COLORSPACK.PINK} />
        </LinearGradient>
      </Defs>

      <AnimatedCircle
        cx={width / 1.3}
        cy={height - 60}
        animatedProps={animatedProps}
        fill="url(#circleGradient)"
      />
    </Svg>
  );
}
