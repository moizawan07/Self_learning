import { useRouter, useSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ProductPage() {
  const { id } = useSearchParams();

  return (
    <View>
      <Text>Product ID: {id}</Text>
    </View>
  );
}
