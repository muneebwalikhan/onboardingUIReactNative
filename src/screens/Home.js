import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORSPACK } from '../colors/Colors'




const Home = () => {
  return (
    <SafeAreaView className={`flex-1 justify-center items-center`}>
      <Text style={{backgroundColor: `${COLORSPACK.CYAN}`}} className='text-3xl'>Thanks For Watching 🙂</Text>
    </SafeAreaView>
  )
}

export default Home