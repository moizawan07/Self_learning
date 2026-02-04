import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButton from "../components/FloatingIcon";
export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <Stack screenOptions={{ headerShown: false }} />

      <FloatingButton />
    </SafeAreaView>
  );
}

