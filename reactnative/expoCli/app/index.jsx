import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  Modal,
  ActivityIndicator,
  FlatList
} from "react-native";
import { Link } from "expo-router";
const logo = require("../assets/favicon.png");
const backgroundImage = require("../assets/adaptive-icon.png");
import UserData from "../data.json";


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        // backgroundColor: "#fff",r
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        paddingInline: 10,
        // backgroundColor: "#000"
      }}
    >
        <Link href="./login" asChild>
          <Text>Go to login</Text>
        </Link>
        <Link href="./signup" asChild style={{marginTop: 10, display: "block"}}>
          <Text>Go to Signup</Text>
        </Link>
      {/* Horizontall Scroll bar */}
      {/* <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: "#f0f0f0" }}
           
        >
          <View
            style={{
              width: 150,
              height: 200,
              backgroundColor: "lightblue",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Text>Card 1</Text>
          </View>
          <View
            style={{
              width: 150,
              height: 200,
              backgroundColor: "lightblue",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
               marginRight: 10,
            }}
          >
            <Text>Card 2</Text>
          </View>
          <View
            style={{
              width: 150,
              height: 200,
              backgroundColor: "lightblue",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
               marginRight: 10,
            }}
          >
            <Text>Card 3</Text>
          </View>
          <View
            style={{
              width: 150,
              height: 200,
              backgroundColor: "lightblue",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
               marginRight: 10,
            }}
          >
            <Text>Card 4</Text>
          </View>
        </ScrollView>
      </View> */}

      {/* Modal Component  */}
      {/* <Pressable onPress={() => setModalVisible(true)}>
        <Text>Modal Open</Text>
      </Pressable>
      <Modal visible={modalVisible} animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <View style={{backgroundColor:"lightblue", flex:1, alignItems:"center", justifyContent:"center"}}>
          <Text>This is a modal Content</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Modal Close</Text>
          </Pressable>
        </View>
      </Modal> */}

      {/* Status bar */}
      {/* <StatusBar  disabled /> */}

      {/* Activity Indicator */}
      {/* <ActivityIndicator size="small" color="yellow"  /> */}

      {/* Flat List */}
      {/* {<ScrollView showsVerticalScrollIndicator={false}>
        {UserData.map((user) => (
          <View key={user.id} style={{backgroundColor: "lightgray",  marginBottom:10, padding:10, borderRadius:10}}>
          <Text>{user.name}</Text>
          <Text>{user.type}</Text>
          </View>
        ))}
      </ScrollView>
      } */}

      <FlatList
        data={UserData}
        renderItem={({ item }) => {
          console.log('items ==>', item.id);
          return (
            <View
              // key={item.id}
              style={{
                backgroundColor: "lightblue",
                marginBottom: 10,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text>{item.name}</Text>
              <Text>{item.type}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />

      <Text className="text-center text-lg font-bold text-green-500">Open up App.js to start working on your app!</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
