import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const MyProfile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <View className="items-center mt-6">
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }}
          className="w-28 h-28 rounded-full"
        />
        <Text className="text-xl font-bold mt-3">Moiz Ahmed</Text>
        <Text className="text-gray-500">moiz@email.com</Text>
      </View>

      <View className="mt-8">
        <Pressable className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <View className="flex-row items-center gap-3">
            <Ionicons name="receipt-outline" size={22} color="black" />
            <Text className="text-base font-medium">My Orders</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </Pressable>

        <Pressable className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <View className="flex-row items-center gap-3">
            <Ionicons name="heart-outline" size={22} color="black" />
            <Text className="text-base font-medium">Wishlist</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </Pressable>

        <Pressable className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <View className="flex-row items-center gap-3">
            <Ionicons name="location-outline" size={22} color="black" />
            <Text className="text-base font-medium">Saved Address</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </Pressable>

        <Pressable className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <View className="flex-row items-center gap-3">
            <Ionicons name="settings-outline" size={22} color="black" />
            <Text className="text-base font-medium">Settings</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </Pressable>
      </View>

      <View className="mt-auto mb-6">
        <Pressable className="bg-danger   py-4 rounded-xl">
          <Text className="text-center text-background font-nunitoBold   text-lg">
            Logout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;
