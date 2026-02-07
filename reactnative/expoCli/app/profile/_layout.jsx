import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ProfileLayout = () => {
  return (
    <View className="flex-1 bg-white">
        <View className="flex flex-row justify-between">

      <Text>ProfileLayout</Text>
      <Stack screenOptions={{headerShown:false}}/>
        </View>
    </View>
  )
}

export default ProfileLayout