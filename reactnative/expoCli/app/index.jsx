import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
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
  FlatList,
  Alert,
} from "react-native";
import { Link } from "expo-router";
const logo = require("../assets/favicon.png");
const backgroundImage = require("../assets/adaptive-icon.png");
import UserData from "../data.json";
import "../global.css";
import FloatingIcon from "../components/FloatingIcon";
import UserModal from "../components/modal/UserModal";
import { useUserContext } from "../context/User";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function App() {
  // const [modalVisible, setModalVisible] = useState(false);
  const [openUserAddModal, setOpenAddModal] = useState(false);
  const { users, setUsers } = useUserContext();

  useEffect(() => {
    setTimeout(() => {
      Toast.show({
        type: "success",
        text1: "Toast Working 🎉",
        text2: "Agar yeh dikh raha hai to sab OK hai",
      });
    }, 500);
  }, []);

  return (
    <SafeAreaView className="flex-1 px-1.5 bg-white">
      {/* Modal called */}
      <UserModal
        openUserAddModal={openUserAddModal}
        setOpenAddModal={setOpenAddModal}
      />
      <View className="flex flex-row py-2 justify-between items-center">
        <Link
          href="./tabs"
          asChild
          className="bg-blue-300 rounded-md px-5 py-2"
        >
          <Text>Tab Screen</Text>
        </Link>

        <View
          className="
        flex flex-row  gap-2"
        >
          <Link
            href="./login"
            asChild
            className="bg-slate-300 rounded-md px-5 py-2"
          >
            <Text>Login</Text>
          </Link>

          <Link
            href="./signup"
            asChild
            className="bg-slate-700 text-white rounded-md px-5 py-2"
          >
            <Text> Signup</Text>
          </Link>
        </View>
      </View>

      <View className="flex flex-row items-end justify-between pr-2 py-2">
        <Text className="text-gray-600  font-bold">
          Login and add the user in the platform!
        </Text>
        <FloatingIcon
          openUserAddModal={openUserAddModal}
          setOpenAddModal={setOpenAddModal}
        />
      </View>

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
        className="h-[88%] mt-2"
        data={users}
        renderItem={({ item }) => {
          return (
            <View
              className="bg-blue-100 border border-blue-500 p-2.5 mb-2 rounded-xl"
              // key={item.id}
              // style={{
              //   backgroundColor: "lightblue",
              //   marginBottom: 10,
              //   padding: 10,
              //   borderRadius: 10,
              // }}
            >
              <Text>{item.name}</Text>
              <Text>{item.type}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View className="pb-5">
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium quisquam omnis at. In ab sequi molestiae, nemo
              exercitationem dolor explicabo blanditiis ullam impedit saepe,
              quam sed nam animi doloribus praesentium iste, accusamus a! Modi!
            </Text>
          </View>
        }
      />
    </SafeAreaView>
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
