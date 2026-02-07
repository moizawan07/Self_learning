import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import "../global.css";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("email is required")
      .email("plz enter a valid email"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "password must be atleast 6 charcaters long"),
    confirmPassword: yup
      .string()
      .required("password is required")
      .oneOf([yup.ref("password"), null], "Password must watch"),
  });
  const {
    control,
    reset,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const router = useRouter();

  const onSubmit = (data) => {
    console.log("form data ==>", data);
    Alert.alert("Sucess", "form submit succcesfully");

    reset();
  };

  // const handleChange = (field, value) => {
  //   setForm({
  //     ...form,
  //     [field]: value,
  //   });
  // };

  // // 3️⃣ Handle submit
  // const handleSubmit = () => {
  //   console.log("Signup Data:", form);

  //   // Example validation
  //   if (!form.name || !form.email || !form.password) {
  //    Alert.alert('All fileds are rquired')
  //     return;
  //   }

  //   router.push('/login')

  //   // Yahan API call hogi
  //   // fetch / axios
  // };

  return (
    <View className="flex-1 justify-center bg-white px-6 ">
      {/* Title */}
      <Text className="text-2xl font-bold text-center mb-6">
        Create YOUR Account
      </Text>

      {/* Name
      <TextInput
        placeholder="Enter your name"
        value={form.name}
        onChangeText={(text) => handleChange("name", text)}
        className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
      />

      {/* Email */}
      {/* <TextInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
      /> */}

      {/* Password */}
      {/* <TextInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
        className="border border-gray-300 rounded-lg px-4 py-3 mb-6"
      />  */}

         {/* Button */}
      {/* <Pressable onPress={handleSubmit} className="bg-blue-600 py-4 rounded-lg">
        <Text className="text-white text-center font-semibold text-lg">
          Sign Up
        </Text>
      </Pressable> */}

      {/* email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              className="border border-gray-500 rounded-md mt-2"
              onBlur={() => {
                onBlur();
                trigger("email");
              }}
              onChangeText={(text) => {
                onChange(text);
                trigger("email");
              }}
              value={value}
              placeholder="Enter your email"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && (
              <Text className="text-red-600">{errors.email.message}</Text>
            )}
          </>
        )}
      />

      {/* password */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              className="border border-gray-500 rounded-md mt-2"
              onBlur={() => {
                onBlur();
                trigger("password");
              }}
              onChangeText={(text) => {
                onChange(text);
                trigger("password");
              }}
              value={value}
              placeholder="Enter your password"
              placeholderTextColor="#ccc"
              secureTextEntry
            />
            {errors.password && (
              <Text className="text-red-600">{errors.password.message}</Text>
            )}
          </>
        )}
      />
      {/* confirm password */}

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              className="border border-gray-500 rounded-md mt-2"
              onBlur={() => {
                onBlur();
                trigger("confirmPassword");
              }}
              onChangeText={(text) => {
                onChange(text);
                trigger("confirmPassword");
              }}
              value={value}
              placeholder="Enter your confirm password"
              placeholderTextColor="#ccc"
              secureTextEntry
            />
            {errors.confirmPassword && (
              <Text className="text-red-600">
                {errors.confirmPassword.message}
              </Text>
            )}
          </>
        )}
      />

      <TouchableOpacity
        className="rounded-md px-7 py-4 mt-5 bg-blue-700"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white text-center">Submit</Text>
      </TouchableOpacity>

   
    </View>
  );
}
