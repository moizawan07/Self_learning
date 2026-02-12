import { Stack, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "../components/FloatingIcon";
import "../global.css";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../context/User";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_300Light_Italic,
} from "@expo-google-fonts/roboto";
import {
  Nunito_200ExtraLight,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";
import { fonts } from "../constants/theme";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import { toggleTheme } from "../redux/reducers/theme-reducer";

SplashScreen.preventAutoHideAsync();

const AppContent = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();

  console.log("isDark ==>", isDark);
  

  return (
    <View className={`${isDark ? "dark" : ""} flex-1 p-10 bg-green-400`}>
      <Pressable
        className="px-5  bg-slate-200"
        onPress={() => dispatch(toggleTheme())} 
      >
        <Text>{isDark ? "Light Theme" : "Dark Theme"}</Text>
      </Pressable>

      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
};


export default function RootLayout() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Nunito_200ExtraLight,
    Nunito_600SemiBold,
  });
 

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: "#000" }} />;
  }


 
  return (
    <GestureHandlerRootView>
    <SafeAreaProvider className="flex-1 px-2  bg-white">
      <Provider store={store}>
        <StatusBar style="inverted" backgroundColor="#000" />
        <Toast />
          <Stack screenOptions={{ headerShown: false }} />
        {/* <AppContent /> */}
      </Provider>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
