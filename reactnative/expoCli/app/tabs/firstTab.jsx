import { View, Text } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons';

const FirstTab = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 justify-center items-center "
    >
      <Ionicons name="home" size={40} color={"green"} />
     
      <Text className="text-4x1 font-bold text-green-500 mt-4 ">First Tab Content</Text>
    </Animated.View>
  );
};


export default FirstTab