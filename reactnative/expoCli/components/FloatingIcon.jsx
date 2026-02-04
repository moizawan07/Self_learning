import { View, Text, StyleSheet } from "react-native";

export default function FloatingIcon() {
  return (
    <View style={styles.icon}>
      <Text style={{ color: "white" }}>+</Text>
    </View>
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
