import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View className="">
      <Text className="bg-red-100">Home Screen</Text>
      <Pressable
        className="bg-blue-700 py-2 w-20 mt-2 rounded-md"
        onPress={() => router.push("/about")}
      >
        <Text className="text-center text-white">About</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
