import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
const onBoardImg = require("../../assets/onBoard.png");
// import "../../global.css"

const OnBoarding = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 pt-0.5 px-5  items-center bg-white">
      <View className="text-center">
        <Image
          source={onBoardImg}
          className="w-[full] h-[60vh]"
          resizeMode="contain"
        />
        <View>
          <Text className="text-4xl text-center font-bold">
            One best App For All
          </Text>
          <Text className="text-4xl text-center font-bold">your Needs</Text>
          <Text className="mt-5 text-center text-[12px] text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
            est repellendus nesciunt maxime magnam sed distinctio rerum amet et
            reiciendis aspernatur adipisci similique molestiae qui mollitia eos
            repellat laborum, facilis impedit? Facilis delectus eligendi illum
            odit fugiat, ad maiores?
          </Text>

          <TouchableOpacity
            className="bg-black mt-5 w-full px-5 py-6 rounded-full"
            onPress={() => router.push("/")}
          >
            <Text className="text-white text-center">Get startted</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
