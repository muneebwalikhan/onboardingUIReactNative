import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from "./screens/Home";
import Oboarding from "./screens/Oboarding";
import Oboarding2 from "./screens/Oboarding2.js";
import WaterEffect from "./Components/WaterEffect.js";

SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const [fontsLoaded] = useFonts({
    'MavenPro': require("../assets/fonts/MavenPro-Regular.ttf")
  })

  useEffect(()=>{
    if(fontsLoaded){
      SplashScreen.hideAsync()
    }

  },[fontsLoaded])

  if(!fontsLoaded) return null

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onBoarding2">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="onBoarding" component={Oboarding} options={{headerShown: false}} />
        <Stack.Screen name="onBoarding2" component={Oboarding2} options={{headerShown: false}} />
        <Stack.Screen name="Effects" component={WaterEffect} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
