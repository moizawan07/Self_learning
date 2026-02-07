import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DynamicRoute = () => {
    const {userName} = useLocalSearchParams();

    console.log("userName ==>", userName);
    
  return (
    <View>
      <Text>DynamicRoute {userName}</Text>
    </View>
  )
}

export default DynamicRoute