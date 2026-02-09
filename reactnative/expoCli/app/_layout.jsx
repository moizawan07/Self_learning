import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "../components/FloatingIcon";
import "../global.css";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../context/User";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import {useFonts} from "expo-font"
import {
  Roboto_300Light,
  Roboto_300Light_Italic,
} from "@expo-google-fonts/roboto";
import {Nunito_200ExtraLight, Nunito_600SemiBold} from "@expo-google-fonts/nunito"
import * as SplashScreen from "expo-splash-screen";
import { fonts } from "../constants/theme";
import  {Drawer} from "expo-router/drawer"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Nunito_200ExtraLight,
    Nunito_600SemiBold
  });

  useEffect(() => {
    if (fontsLoaded) {
        SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: "#000" }} />;
  }

  // useEffect(() => {
  //   const loadAsyncStorage = async() => {

  //     // const data = await AsyncStorage.removeItem('token', );
  //     // const data = await AsyncStorage.setItem('token', "123");
  //     // const keys =  await AsyncStorage.getAllKeys();
  //     // const data =  await AsyncStorage.multiGet(keys);

  //     // console.log("data ==>",data);

  //   }

  //   loadAsyncStorage()
  // },[])

  return (
    <SafeAreaProvider className="flex-1 px-2  bg-white">
      {/* <GestureHandlerRootView>
        <Drawer>
         
        </Drawer>
      </GestureHandlerRootView> */}
      <UserProvider>
        <StatusBar style="inverted" backgroundColor="#000" />
        <Toast />
        <Stack screenOptions={{ headerShown: false }} />

        {/* <Text style={{fontFamily: fonts.nunito.semiBold}}>Nunito Footer</Text>
        <Text style={{fontFamily: fonts.roboto.lightItalic}}>Roboto Footer</Text> */}
      </UserProvider>

      {/* <FloatingButton /> */}
    </SafeAreaProvider>
  );
}
