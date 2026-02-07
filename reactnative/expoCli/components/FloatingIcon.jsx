import { View, Text, StyleSheet, Pressable } from "react-native";

export default function FloatingIcon({setOpenAddModal}) {
  return (
    <Pressable className="bg-black w-10 h-10 rounded-lg flex items-center justify-center"
    onPress={() => setOpenAddModal(true)}
    >
      <Text className="text-xl text-white">+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    bottom: 10,
    right: 20,
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
});
