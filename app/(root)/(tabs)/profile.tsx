import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '@/constants'
import { router } from 'expo-router'

const settings = () => {
  return (
    <SafeAreaView className='flex-1 mt-2 p-2'>
        <ScrollView className='flex-1'>
        <View className='flex flex-row items-center gap-10  '>
            <TouchableOpacity onPress={() => router.back()}>
             <Image resizeMode='contain' className='w-6 h-6' source={icons.backArrow}  />
             </TouchableOpacity>
             
             <Text className=' font-JakartaExtraBold text-lg'>
              Profile
             </Text>
          
             
         </View>
        </ScrollView> 
    </SafeAreaView>
  )
}

export default settings