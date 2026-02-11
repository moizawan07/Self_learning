import { View, Text, Image, FlatList, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../../redux/reducers/cart.reducer";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef, useMemo, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["10%", "20%", "55%", "80%"], []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <SafeAreaView className="flex-1 bg-white px-5 pt-12">
      <Text className="text-2xl font-bold text-center">Your Bag</Text>

      <View className="flex flex-row justify-between mt-6 mb-3">
        <Text>
          Cart Items{" "}
          <Text className="text-yellow-400 font-bold">
            ({cartItems.length})
          </Text>
        </Text>
        <Pressable onPress={() => dispatch(clearCart())}>
          <Text className="underline text-red-500">Clear</Text>
        </Pressable>
      </View>

      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150 }}
            renderItem={({ item }) => (
              <View className="flex-row bg-gray-100 p-4 mb-3 rounded-xl">
                <Image
                  source={{ uri: item.image }}
                  className="w-20 h-20 rounded-md"
                />

                <View className="flex-1 ml-3">
                  <Text className="font-bold">{item.title}</Text>
                  <Text className="mt-1">Pkr: {item.price}</Text>

                  {/* Counter */}
                  <View className="flex-row items-center mt-3">
                    <Pressable
                      onPress={() => dispatch(decrementQuantity(item.id))}
                      className="w-8 h-8 bg-black rounded-md justify-center items-center"
                    >
                      <Text className="text-white">-</Text>
                    </Pressable>

                    <Text className="mx-4 font-bold">{item.quantity}</Text>

                    <Pressable
                      onPress={() => dispatch(incrementQuantity(item.id))}
                      className="w-8 h-8 bg-black rounded-md justify-center items-center"
                    >
                      <Text className="text-white">+</Text>
                    </Pressable>

                    <Pressable
                      onPress={() => dispatch(removeFromCart(item.id))}
                      className="ml-5"
                    >
                      <Text className="text-red-500">Remove</Text>
                    </Pressable>
                  </View>

                  <Text className="mt-2 font-semibold">
                    Subtotal: {item.price * item.quantity}
                  </Text>
                </View>
              </View>
            )}
          />

          {/* Checkout Section */}
          <View className="absolute bottom-0 left-0 right-0 bg-white px-5 py-3 border-t">
            <View className="flex-row justify-between mb-3">
              <Text className="text-lg font-bold">Total</Text>
              <Text className="text-lg font-bold">Pkr: {totalPrice}</Text>
            </View>

            <Pressable
              className="bg-black py-4 rounded-xl"
              onPress={openBottomSheet}
            >
              <Text className="text-white text-center font-bold text-lg">
                Checkout
              </Text>
            </Pressable>
          </View>
        </>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Image
            source={require("../../assets/bagEmpty.png")}
            resizeMode="contain"
            className="w-[75] h-[75]"
          />
          <Text className="text-2xl font-bold text-center">
            Your bag is empty
          </Text>
          <Text className="text-gray-400 text-sm text-center px-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque,{" "}
          </Text>
        </View>
      )}

      {/* Bottom Sheet For Confirm order */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <BottomSheetView className="flex-1 px-5 py-5">
          <Text className="text-xl font-bold mb-4">Order Summary</Text>

          <View className="flex-row justify-between mb-2">
            <Text>Total Items</Text>
            <Text>{cartItems.length}</Text>
          </View>

          <View className="flex-row justify-between mb-2">
            <Text>Total Price</Text>
            <Text>Pkr: {totalPrice}</Text>
          </View>

          <Pressable className="bg-yellow-400 py-4 rounded-xl mt-5">
            <Text className="text-center font-bold text-lg">Confirm Order</Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Cart;
