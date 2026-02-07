import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "../components/FloatingIcon";
import "../global.css";
import { Pressable, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../context/User";

export default function RootLayout() {
  return (
    <SafeAreaView  className="flex-1 px-2  bg-white">
      <UserProvider>
        {/* <StatusBar hidden={true}/> */}
        <Stack screenOptions={{ headerShown: false }} />
      </UserProvider>

      {/* <FloatingButton /> */}
    </SafeAreaView>
  );
}
