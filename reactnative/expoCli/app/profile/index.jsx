import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const MyProfile = () => {
    const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <Text>My Profile</Text>
      <Pressable className="mt-2 w-30 bg-gray-300  px-8 py-2 rounded-md" onPress={() => router.push('profile/setting')}>

      <Text>go to the Settings</Text>

      </Pressable>
    </View>
  )
}

export default MyProfile;