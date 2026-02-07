import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 px-10   ">
      <Stack  />

      {/* Footer */}
      <View className=" py-40 ">
        <Link className="mt-3 bg-gray-200 w-55 h-10 align-middle rounded-md" href="/"><Text className="text-center ">Home</Text></Link>
        <Link className="mt-3 bg-gray-200 w-55 h-10 align-middle rounded-md" href="/products"><Text className="text-center ">Products</Text></Link>
        <Link className="mt-3 bg-gray-200 w-55 h-10 align-middle rounded-md" href="/products/2"><Text className="text-center ">Product 1</Text></Link>

        <Link className="mt-3 bg-gray-200 w-55 h-10 align-middle rounded-md" href="/tabs"><Text className="text-center ">Tabs</Text></Link>
      
      </View>
    </SafeAreaView>
  );
}
