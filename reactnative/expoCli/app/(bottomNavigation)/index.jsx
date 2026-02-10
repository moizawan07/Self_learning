import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
const category1Img = require('../../assets/onBoard.png')
const banner1 = require('../../assets/banner1.png')
const product1 = require('../../assets/product1.png')

const HomeProducts = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 px-2 bg-white">
    
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-2 pt-5">
          {/* Top Line */}
          <View className="flex flex-row justify-between items-center">
            <Text className="text-2xl font-bold">ShopLine</Text>
            <View className="flex flex-row gap-4">
              <Ionicons name="notification" color="gray" size={26} />
              <Pressable onPress={() => router.replace('./login')}>
              <Ionicons name="log-out" color="black" size={22} />
              </Pressable>
            </View>
          </View>

          {/* Categories */}
          <Text className="text-2xl font-semibold mb-2 mt-7">
            Our Categories...
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row justify-start items-center gap-2">
              <View className="px-2 flex justify-center items-center">
                <Image source={category1Img} className="w-[100px] h-[100px] rounded-xl" resizeMode="contain"/>
                <Text className="mt-2 font-bold">Category 1</Text>
              </View>
              <View className="px-2 flex justify-center items-center">
                <Image source={category1Img} className="w-[100px] h-[100px] rounded-xl" resizeMode="contain"/>
                <Text className="mt-2 font-bold">Category 2</Text>
              </View>
              <View className="px-2 flex justify-center items-center">
                <Image source={category1Img} className="w-[100px] h-[100px] rounded-xl" resizeMode="contain"/>
                <Text className="mt-2 font-bold">Category 3</Text>
              </View>
              <View className="px-2 flex justify-center items-center">
                <Image source={category1Img} className="w-[100px] h-[100px] rounded-xl" resizeMode="contain"/>
                <Text className="mt-2 font-bold">Category 4</Text>
              </View>
              <View className="px-2 flex justify-center items-center">
                <Image source={category1Img} className="w-[100px] h-[100px] rounded-xl" resizeMode="contain"/>
                <Text className="mt-2 font-bold">Category 5</Text>
              </View>
              <View className="px-2 flex justify-center items-center">
                <Image source={category1Img} className="w-[100px] h-[100px] rounded-xl" resizeMode="contain"/>
                <Text className="mt-2 font-bold">Category 6</Text>
              </View>
              <View className="px-2 flex justify-center items-center">
                <Image source={category1Img} className="w-[100px] h-[100px] rounded-xl" resizeMode="contain"/>
                <Text className="mt-2 font-bold">Category 7</Text>
              </View>
              <View className="px-2 flex justify-center items-center">
                <Image source={category1Img} className="w-[100px] h-[100px] rounded-xl" resizeMode="contain"/>
                <Text className="mt-2 font-bold">Category 8</Text>
              </View>
            </View>
          </ScrollView>

          {/* Products */}
          <Text className="text-2xl font-semibold mb-2 mt-7">
            Our Products...
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className=" flex  flex-row items-center justify-between gap-4 ">
              <View>
               <View className="relative py-5 px-5 w-[180px] h-[250px] border border-orange-300 bg-orange-100 rounded-xl">
                  <Image source={category1Img} className="w-[100%] h-[100%] rounded-xl" resizeMode="cover"/>
               </View>
               {/* discount & Like badge */}
               <View className="w-full absolute top-3 flex flex-row px-3 justify-between items-center ">

               <Text className="px-5 py-2 bg-yellow-400 rounded-md text-white text-center">5%</Text>


               <Ionicons name="heart" color="gray" size={25}/>
               </View>
               <Text className="text-xl font-semibold mt-2">Title</Text>
               <Text className="font-semibold mt-1">Pkr: 1899</Text>
              </View>

               <View>
               <View className="relative py-5 px-5 w-[180px] h-[250px] border border-purple-300 bg-purple-100 rounded-xl">
                  <Image source={category1Img} className="w-[100%] h-[100%] rounded-xl" resizeMode="cover"/>
               </View>
               {/* discount & Like badge */}
               <View className="w-full absolute top-3 flex flex-row px-3 justify-between items-center ">

               <Text className="px-5 py-2 bg-yellow-400 rounded-md text-white text-center">5%</Text>


               <Ionicons name="heart" color="gray" size={25}/>
               </View>
               <Text className="text-xl font-semibold mt-2">Title</Text>
               <Text className="font-semibold mt-1">Pkr: 199</Text>
              </View>

                <View>
               <View className="relative py-5 px-5 w-[180px] h-[250px] border border-green-300 bg-green-100 rounded-xl">
                  <Image source={category1Img} className="w-[100%] h-[100%] rounded-xl" resizeMode="cover"/>
               </View>
               {/* discount & Like badge */}
               <View className="w-full absolute top-3 flex flex-row px-3 justify-between items-center ">

               <Text className="px-5 py-2 bg-yellow-400 rounded-md text-white text-center">5%</Text>


               <Ionicons name="heart" color="gray" size={25}/>
               </View>
               <Text className="text-xl font-semibold mt-2">Title</Text>
               <Text className="font-semibold mt-1">Pkr: 1700</Text>
              </View>

                <View>
               <View className="relative py-5 px-5 w-[180px] h-[250px] border border-gray-300 bg-gray-100 rounded-xl">
                  <Image source={category1Img} className="w-[100%] h-[100%] rounded-xl" resizeMode="cover"/>
               </View>
               {/* discount & Like badge */}
               <View className="w-full absolute top-3 flex flex-row px-3 justify-between items-center ">

               <Text className="px-5 py-2 bg-yellow-400 rounded-md text-white text-center">5%</Text>


               <Ionicons name="heart" color="gray" size={25}/>
               </View>
               <Text className="text-xl font-semibold mt-2">Title</Text>
               <Text className="font-semibold mt-1">Pkr: 3500</Text>
              </View>

                <View>
               <View className="relative py-5 px-5 w-[180px] h-[250px] border border-yellow-300 bg-yellow-100 rounded-xl">
                  <Image source={category1Img} className="w-[100%] h-[100%] rounded-xl" resizeMode="cover"/>
               </View>
               {/* discount & Like badge */}
               <View className="w-full absolute top-3 flex flex-row px-3 justify-between items-center ">

               <Text className="px-5 py-2 bg-yellow-400 rounded-md text-white text-center">5%</Text>


               <Ionicons name="heart" color="gray" size={25}/>
               </View>
               <Text className="text-xl font-semibold mt-2">Title</Text>
               <Text className="font-semibold mt-1">Pkr: 5422</Text>
              </View>

                <View>
               <View className="relative py-5 px-5 w-[180px] h-[250px] border border-blue-300 bg-blue-100 rounded-xl">
                  <Image source={category1Img} className="w-[100%] h-[100%] rounded-xl" resizeMode="cover"/>
               </View>
               {/* discount & Like badge */}
               <View className="w-full absolute top-3 flex flex-row px-3 justify-between items-center ">

               <Text className="px-5 py-2 bg-yellow-400 rounded-md text-white text-center">5%</Text>


               <Ionicons name="heart" color="gray" size={25}/>
               </View>
               <Text className="text-xl font-semibold mt-2">Title</Text>
               <Text className="font-semibold mt-1">Pkr: 2588</Text>
              </View>
            </View>
          </ScrollView>

          {/* Banner */}
          <Text className="text-2xl font-semibold mb-2 mt-7">Banners...</Text>
          <View className="w-full h-[150px] bg-purple-300 rounded-md mb-2">
            <Image source={banner1} resizeMode="cover" className="w-full h-full" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeProducts;
