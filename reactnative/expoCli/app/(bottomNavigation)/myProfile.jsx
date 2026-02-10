import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const MyProfile = () => {
  return (
     <SafeAreaView className="flex-1 px-2 bg-white">
         <Text>My Profile</Text>
       </SafeAreaView>
  )
}

export default MyProfile