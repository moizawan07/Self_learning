import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";
import "../global.css";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // 3️⃣ Handle submit
  const handleSubmit = () => {
    console.log("login Data:", form);

    // Example validation
    if (!form.email || !form.password) {
      Alert.alert("All fileds are rquired");
      return;
    }

    router.push("/");

    // Yahan API call hogi
  };

  return (
    <SafeAreaView className="flex-1 justify-center  bg-white px-6 ">
      <View>
        {/* Title */}
        <Text className="text-2xl font-bold text-center mb-6">
          LOG In YOUR Account
        </Text>

        {/* Email */}
        <TextInput
          placeholder="Enter your email"
          value={form.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
        />

        {/* Password */}
        <TextInput
          placeholder="Enter your password"
          value={form.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
          className="border border-gray-300 rounded-lg px-4 py-3 mb-6"
        />

        {/* Button */}
        <Pressable
          onPress={handleSubmit}
          className="bg-blue-600 py-4 rounded-lg"
        >
          <Text className="text-white text-center font-semibold text-lg">
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
