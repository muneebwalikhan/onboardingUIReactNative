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
import UseRefHook from "./HooksReactNative/UseRef/UseRefHook.js";
import Comp1 from "./HooksReactNative/useContext/Comp1.js";
import Comp2 from "./HooksReactNative/useContext/Comp2.js";
import Comp3 from "./HooksReactNative/useContext/Comp3.js";
import ParentContext from "./HooksReactNative/useContext/ParentContext.js";
import UseCallBackHook from "./HooksReactNative/UseCallBack/UseCallBackHook.js";
import UseCallBackHook2 from "./HooksReactNative/UseCallBack/UseCallBackHook2.js";
import UseCallbackParent from "./HooksReactNative/UseCallBack/UseCallbackParent.js";

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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="onBoarding" component={Oboarding} options={{headerShown: false}} />
        <Stack.Screen name="onBoarding2" component={Oboarding2} options={{headerShown: false}} />
        <Stack.Screen name="userefhook" component={UseRefHook} options={{headerShown: false}} />
        {/* <Stack.Screen name="Effects" component={WaterEffect} options={{headerShown: false}} /> */}

        {/* context screens */}
        <Stack.Screen name="ParentContext" component={ParentContext} options={{headerShown: true, title:'Parent Context'}} />
        <Stack.Screen name="comp1" component={Comp1} options={{headerShown: true}} />
        <Stack.Screen name="comp2" component={Comp2} options={{headerShown: true}} />
        <Stack.Screen name="comp3" component={Comp3} options={{headerShown: true}} />

        {/* usecallback */}
        <Stack.Screen name="usecallbackhookParent" component={UseCallbackParent} options={{headerShown: true,title:'Parent UseCallBack'}} />
        <Stack.Screen name="usecallback1" component={UseCallBackHook} options={{headerShown: true}} />
        <Stack.Screen name="usecallback2" component={UseCallBackHook2} options={{headerShown: true}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
