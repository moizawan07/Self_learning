import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import '../global.css'

const RootLayout = () => {
  return (
    <SafeAreaView className='flex-1 px-10 bg-orange-100'>
      <Stack screenOptions={{headerShown: false}}/>
      <Text>Root layout</Text>
    </SafeAreaView>
  )
}

export default RootLayout