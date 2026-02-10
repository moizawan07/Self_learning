import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomNavigationLayout = () => {
  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#000000", // Active icon/text color - black
          tabBarInactiveTintColor: "#9CA3AF", // Inactive icon/text color - gray
          animation: "shift",
          tabBarStyle: {
            // height: 60,
            paddingBottom: 8,
            paddingTop: 8,
            borderTopWidth: 1,
            elevation: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            backgroundColor: "#FFFFFF",
          },
          tabBarItemStyle: {
            paddingVertical: 4,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
            marginTop: 2,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size, focused }) => (
              <View className={`pb-1 ${focused ? "border-b-2 border-black" : ""}`}>
                <Ionicons name="home" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="searchProduct"
          options={{
            title: "Search",
            tabBarIcon: ({ color, size, focused }) => (
              <View className={`pb-1 ${focused ? "border-b-2 border-black" : ""}`}>
                <Ionicons name="search" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="likeProducts"
          options={{
            title: "Like",
            tabBarIcon: ({ color, size, focused }) => (
              <View className={`pb-1 ${focused ? "border-b-2 border-black" : ""}`}>
                <Ionicons name="heart" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ color, size, focused }) => (
              <View className={`pb-1 ${focused ? "border-b-2 border-black" : ""}`}>
                <Ionicons name="cart" size={size} color={color} />
              </View>
            ),
            tabBarBadge: 1,
            tabBarBadgeStyle: {
              backgroundColor: "#EF4444",
              fontSize: 10,
              minWidth: 18,
              height: 18,
            },
          }}
        />
        <Tabs.Screen
          name="myProfile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size, focused }) => (
              <View className={`pb-1 ${focused ? "border-b-2 border-black" : ""}`}>
                <Ionicons name="person" size={size} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default BottomNavigationLayout;