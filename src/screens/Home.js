import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Text className='text-3xl text-red-500'>Thanks For Watching 🙂</Text>
    </SafeAreaView>
  )
}

export default Home