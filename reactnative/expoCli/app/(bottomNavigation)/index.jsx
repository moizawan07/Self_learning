import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/reducers/auth.reducer";
const category1Img = require("../../assets/onBoard.png");
const banner1 = require("../../assets/banner1.png");
const product1 = require("../../assets/product1.png");
import {
  addKeyToStorage,
  deleteKeyFromStorage,
  getValueFromStorage,
} from "../../helpers/asyncStorage";
import {
  filterProductWithCategory,
  setProducts,
} from "../../redux/reducers/product.reducer";
import { addToCart } from "../../redux/reducers/cart.reducer";

const HomeProducts = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { filterProducts, categories } = useSelector((state) => state.product);
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const [onBoard, setOnBoard] = useState(false);
  const [likedProductsId, setLikedProductsId] = useState([]);

  // console.log("likedProductsId ==>", likedProductsId.includes(1));

  // console.log("is Authenticated ==>",isAuthenticated);
  // console.log("Token ==>",token);

  // onBoard Check
  useEffect(() => {
    const onBoardLoad = async () => {
      try {
        // await deleteKeyFromStorage('userOnboard')
        const userOnBoard = await getValueFromStorage("userOnboard");
        const token = await getValueFromStorage("token");

        if (token) {
          dispatch(login(token));
        }

        if (!userOnBoard) {
          router.push("/onboarding");
          addKeyToStorage("userOnboard", true);
          return;
        }
        setOnBoard(true);
      } catch (error) {
        console.log("error ==>", error);
      }
    };

    onBoardLoad();
  }, []);

  // products Load
  useEffect(() => {
    const loadProducts = async () => {
      dispatch(setProducts());
      const data = await getValueFromStorage("likeProducts");

      console.log("data ==>", data);

      setLikedProductsId(data);
    };

    loadProducts();
  }, []);

  // likedProductToggled
  const likedProductToggled = async (id) => {
    const alreadyAdd = likedProductsId.find((productId) => productId == id);

    let updatedLikeProducts;

    // already add so remove it otherwise add it
    if (alreadyAdd) {
      updatedLikeProducts = likedProductsId.filter(
        (productId) => productId !== alreadyAdd,
      );
    } else {
      updatedLikeProducts = [...likedProductsId, id];
    }

    setLikedProductsId(updatedLikeProducts);
    addKeyToStorage("likeProducts", JSON.stringify(updatedLikeProducts));

    if (!onBoard) {
    }
    return (
      <SafeAreaView className="flex-1 justify-center items-center px-1.5 bg-white">
        <ActivityIndicator color="black" size={65} />
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView className="flex-1 px-2 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-2 pt-5">
          {/* Top Line */}
          <View className="flex flex-row justify-between items-center">
            <Text className="text-2xl font-bold">ShopLine</Text>
            <View className="flex flex-row gap-4">
              <Ionicons name="notification" color="gray" size={26} />
              <Pressable
                onPress={() => {
                  dispatch(logout());
                  deleteKeyFromStorage("token");
                  router.replace("./login");
                }}
              >
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
              {categories.length > 0 &&
                categories.map((category) => (
                  <Pressable
                    key={category}
                    onPress={() =>
                      dispatch(filterProductWithCategory(category))
                    }
                  >
                    <View className="px-2 py-1 flex justify-center items-center">
                      <Image
                        source={{
                          uri: "https://e7.pngegg.com/pngimages/244/245/png-clipart-leather-jacket-denim-outerwear-viewways-men-slim-denim-jacket-winter-cowboy-thumbnail.png",
                        }}
                        className="w-[80] h-[80] rounded-full"
                        resizeMode="contain"
                      />
                      <Text className="mt-2 font-bold">{category}</Text>
                    </View>
                  </Pressable>
                ))}
            </View>
          </ScrollView>

          {/* Products */}
          <Text className="text-2xl font-semibold mb-2 mt-7">
            Our Products...
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className=" flex  flex-row items-center justify-between gap-4 ">
              {filterProducts.length > 0 &&
                filterProducts.map((product) => (
                  <View key={product?.id}>
                    <View
                      className={`relative  bg-orange-300 w-[180] h-[250] border 
                      border-orange-300 bg-${product.bg} rounded-xl`}
                    >
                      <Image
                        source={{ uri: product?.image }}
                        className="w-full h-full rounded-xl"
                        resizeMode="cover"
                      />
                    </View>
                    {/* discount & Like badge */}
                    <View className="w-full absolute top-2 flex flex-row px-2 justify-between items-center ">
                      <Text className="px-4 py-1.5 bg-yellow-400 rounded-md text-white text-center">
                        {product?.percentOff}
                      </Text>
                      <Pressable
                        onPress={() => likedProductToggled(product?.id)}
                      >
                        <Ionicons
                          name="heart"
                          color={
                            likedProductsId.includes(product?.id)
                              ? "red"
                              : "gray"
                          }
                          size={25}
                        />
                      </Pressable>
                    </View>
                    <Text className="text-md font-semibold mt-2">
                      {product?.title}
                    </Text>
                    <Text className="font-semibold mt-1">
                      Pkr: {product?.price}
                    </Text>
                    <Text className="font-semibold mt-1">
                      category: {product?.category}
                    </Text>

                    <Pressable
                      className="w-[90] mt-3 rounded-md px-1 py-2 border"
                      onPress={() =>
                        isAuthenticated
                          ? dispatch(addToCart(product))
                          : Alert.alert("login required")
                      }
                    >
                      <Text className="text text-center text-md">
                        Add To Cart
                      </Text>
                    </Pressable>
                  </View>
                ))}
            </View>
          </ScrollView>

          {/* Banner */}
          <Text className="text-2xl font-semibold mb-2 mt-8">Banners...</Text>
          <View className="w-full h-[150px] bg-purple-300 rounded-md mb-2">
            <Image
              source={banner1}
              resizeMode="cover"
              className="w-full h-full"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeProducts;
