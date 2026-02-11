import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addKeyToStorage,
  getValueFromStorage,
} from "../../helpers/asyncStorage";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  // Validation schema
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Handle submit
  const onSubmit = async (data) => {
    console.log("data ==>", data);
    
    
    const oldUsers = await getValueFromStorage("users") || [];

    console.log("oldUsers ==>", oldUsers);

    if (oldUsers) {
      const alreadyExist = oldUsers.find((user) => user.email === data.email);

      if (alreadyExist) {
        return Alert.alert("Error", "Email already exist");
      }
    }
    
    oldUsers.push(data);
    
    const add = await addKeyToStorage("users", oldUsers);
    
    console.log("add ==>", add);
    
    Alert.alert("Success", "Account created successfully!");
    router.push("/login");
    // Yahan API call hogi
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <SafeAreaView className="flex-1 pt-20 bg-white px-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center">
            <Text className="text-white font-bold text-3xl">$</Text>
          </View>
          <View className="mt-7">
            <Text className="text-3xl font-bold mb-1.5">Create account</Text>
            <Text className="text-sm text-gray-500">
              Sign up to get started with our app
            </Text>
          </View>

          {/* Email Input with Icon */}
          <View className="relative mt-8 mb-2">
            <Ionicons
              name="envelope"
              size={20}
              color="#9CA3AF"
              style={{
                position: "absolute",
                left: 20,
                top: 20,
                zIndex: 10,
              }}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    placeholder="Enter your email"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="border focus:border-black font-semibold border-gray-100 rounded-full pl-12 pr-4 py-5"
                    placeholderTextColor="#9CA3AF"
                  />
                  {errors.email && (
                    <Text className="text-red-600 text-sm ml-4 mt-1">
                      {errors.email.message}
                    </Text>
                  )}
                </>
              )}
            />
          </View>

          {/* Password Input with Icons */}
          <View className="relative mt-4 mb-2">
            <Ionicons
              name="key"
              size={20}
              color="#9CA3AF"
              style={{
                position: "absolute",
                left: 20,
                top: 20,
                zIndex: 10,
              }}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    placeholder="Enter your password"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry={!showPassword}
                    className="border focus:border-black border-gray-100 rounded-full pl-12 pr-12 py-5"
                    placeholderTextColor="#9CA3AF"
                  />
                  {errors.password && (
                    <Text className="text-red-600 text-sm ml-4 mt-1">
                      {errors.password.message}
                    </Text>
                  )}
                </>
              )}
            />
            <Pressable
              onPress={togglePasswordVisibility}
              className="absolute right-4 top-5"
            >
              <Ionicons
                name={showPassword ? "eye-slash" : "eye"}
                size={20}
                color="#9CA3AF"
              />
            </Pressable>
          </View>

          {/* Confirm Password Input with Icons */}
          <View className="relative mt-4 mb-2">
            <Ionicons
              name="key"
              size={20}
              color="#9CA3AF"
              style={{
                position: "absolute",
                left: 20,
                top: 20,
                zIndex: 10,
              }}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    placeholder="Confirm your password"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry={!showConfirmPassword}
                    className="border focus:border-black border-gray-100 rounded-full pl-12 pr-12 py-5"
                    placeholderTextColor="#9CA3AF"
                  />
                  {errors.confirmPassword && (
                    <Text className="text-red-600 text-sm ml-4 mt-1">
                      {errors.confirmPassword.message}
                    </Text>
                  )}
                </>
              )}
            />
            <Pressable
              onPress={toggleConfirmPasswordVisibility}
              className="absolute right-4 top-5"
            >
              <Ionicons
                name={showConfirmPassword ? "eye-slash" : "eye"}
                size={20}
                color="#9CA3AF"
              />
            </Pressable>
          </View>

          {/* Button */}
          <Pressable
            onPress={handleSubmit(onSubmit)}
            className="bg-black py-4 rounded-full mt-7"
          >
            <Text className="text-white text-center font-semibold text-lg">
              Sign Up
            </Text>
          </Pressable>

          <Text className="mt-10 text-center text-gray-500">
            Or sign up with
          </Text>

          <View className="flex flex-row justify-evenly mt-7">
            <Pressable className="flex flex-row items-center justify-center gap-2 w-[44%] py-3 rounded-md border border-gray-200">
              <Image
                source={{
                  uri: "https://static.vecteezy.com/system/resources/thumbnails/046/861/647/small/google-logo-transparent-background-free-png.png",
                }}
                className="w-7 h-7"
                resizeMode="contain"
              />
              <Text>Google</Text>
            </Pressable>
            <Pressable className="flex flex-row items-center justify-center gap-2 w-[44%] py-3 rounded-md border border-gray-200">
              <Ionicons name="apple" size={24} color="#000000" />
              <Text>Apple</Text>
            </Pressable>
          </View>

          <View className="mt-10 mb-10">
            <Text className="text-center">
              Already have an account?{" "}
              <Text
                className="text-yellow-500 font-semibold"
                onPress={handleLogin}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
