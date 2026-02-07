import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker"; // npm install @react-native-picker/picker
import { useUserContext } from "../../context/User";

const UserModal = ({ openUserAddModal, setOpenAddModal }) => {
  const [form, setForm] = useState({ name: "", type: "" });
  const {addUser} = useUserContext()

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log("data submit ==>", form);
    // yahan se tum add logic ya API call kar sakte ho
    addUser(form)
    setOpenAddModal(false);

  };

  return (
    <Modal
      visible={openUserAddModal}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setOpenAddModal(false)}
    >
      {/* Full screen overlay */}
      <Pressable
        className="flex-1 bg-black/10 justify-center items-center"
        onPress={() => setOpenAddModal(false)} // bahar click close
      >
        {/* Modal content box */}
        <Pressable
          className="w-[80%]  bg-gray-200 rounded-xl p-4"
          onPress={(e) => e.stopPropagation()} // box ke andar click close na ho
        >
          <Pressable
            className="self-end bg-gray-400 rounded-md p-2 mb-2"
            onPress={() => setOpenAddModal(false)}
          >
            <Text className="text-white font-bold">Close</Text>
          </Pressable>

          <Text className="text-lg font-bold mb-4">Add a new user</Text>

          {/* Name Input */}
          <Text className="mb-1 font-semibold">User Name</Text>
          <TextInput
            placeholder="Enter user name"
            className="border h-12 border-gray-400 focus:border-blue-600 rounded-md p-2 mb-4"
            onChangeText={(value) => handleChange("name", value)}
            value={form.name}
          />

          {/* Type Picker */}
          <Text className="mb-1 font-semibold">User Type</Text>
          <View className="border h-12 border-gray-400 rounded-md mb-4">
            <Picker
              className=""
              selectedValue={form.type}
              onValueChange={(value) => handleChange("type", value)}
            >
              <Picker.Item label="Select type" value="" />
              <Picker.Item label="Admin" value="admin" />
              <Picker.Item label="Editor" value="user" />
            </Picker>
          </View>

          {/* Submit button */}
          <Pressable
            className="mt-4 py-3 bg-blue-400 rounded-md"
            onPress={handleSubmit}
          >
            <Text className="text-center text-white font-bold">Add User</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default UserModal;
