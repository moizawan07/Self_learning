import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image, TextInput } from "react-native-web";

export default function App() {
  const [name, setName] = useState("");
  console.log("name ==>", name);

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <View>
      <Text>
        Hello <Text style={{ fontWeight: "bold" }}>World</Text>
      </Text>

      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
        style={{ width: 200, height: 200 }}
      />

      <Pressable
        style={{
          backgroundColor: "blue",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </Pressable>

      <TextInput
        placeholder="Enter your name"
        value={name}
        keyboardType="email-address"
        onChangeText={setName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
