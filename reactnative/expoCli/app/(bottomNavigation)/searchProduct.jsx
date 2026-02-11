import { View, Text, TextInput, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchProduct = () => {
  const { allProducts } = useSelector((state) => state.product);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  //  Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  //  Filtering
  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );

    setFilteredProducts(filtered);
  }, [debouncedSearch]);

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      {/* Search Input */}
      <View className="flex flex-row items-center border border-gray-300 rounded-full px-4 py-3 mt-5">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search products..."
          value={search}
          onChangeText={setSearch}
          className="flex-1 ml-2"
        />
      </View>

      {/* Results */}
      <View className="mt-5 flex-1">
        {filteredProducts.length > 0 ? (
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="flex flex-row items-center gap-3 py-3 border-b border-gray-100">
                <Image
                  source={{ uri: item.image }}
                  className="w-16 h-16 rounded-md"
                  resizeMode="cover"
                />
                <View className="flex-1">
                  <Text className="font-semibold">{item.title}</Text>
                  <Text className="text-gray-500">Pkr: {item.price}</Text>
                </View>
              </View>
            )}
          />
        ) : debouncedSearch !== "" ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-400">No products found</Text>
          </View>
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-400">
              Start typing to search products...
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchProduct;
