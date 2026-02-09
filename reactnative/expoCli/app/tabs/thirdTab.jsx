import { View, Text } from "react-native";
import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Ionicons } from '@expo/vector-icons';

const SecondTab = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 justify-center items-center l bg-white"
    >
      <Ionicons name="information-circle" size={40} color="orange" />
      <Text className="text-2x1 text-orange-500 mt-4">Settings Tab Content</Text>
    </Animated.View>
  );
};


export default SecondTab