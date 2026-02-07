import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "../components/FloatingIcon";
import "../global.css";
import { Pressable, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../context/User";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  useEffect(() => {
    const loadAsyncStorage = async() => {
      // const data = await AsyncStorage.removeItem('token', );
      // const data = await AsyncStorage.setItem('token', "123");
      // const keys =  await AsyncStorage.getAllKeys();
      // const data =  await AsyncStorage.multiGet(keys);

      // console.log("data ==>",data);
      
    }

    loadAsyncStorage()
  },[])
  return (
    <SafeAreaView  className="flex-1 px-2  bg-white">
      <UserProvider>
        {/* <StatusBar hidden={true}/> */}
        <Stack screenOptions={{ headerShown: false }} />

        <Text>Footer</Text>
      </UserProvider>

      {/* <FloatingButton /> */}
    </SafeAreaView>
  );
}
