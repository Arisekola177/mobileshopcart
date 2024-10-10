import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '@/constants'

const cart = () => {
  return (
    <SafeAreaView className='flex-1 mx-2'>
      <ScrollView className='flex-1'>
         <View className='flex flex-row items-center justify-between '>
             <Image resizeMode='contain' className='w-6 h-6' source={icons.backArrow}  />
             <View className='w-10 h-10 rounded-full bg-[#D3D3D3] flex items-center justify-center'>
             <Image resizeMode='contain' className='w-6 h-6' source={icons.cart}  />
             </View>
            
         </View>
         <View className='flex items-center justify-center mt-10 relative'>
            <Image source={images.redsneakers} resizeMode='contain' />
            <View className='flex flex-row items-center pt-2 justify-center gap-2'>
              <Text className='w-2 h-2 rounded-full bg-[#DEDBDB]' />
              <Text className='w-2 h-2 rounded-full bg-[#FFA3B3]' />
              <Text className='w-2 h-2 rounded-full bg-[#DEDBDB]' /> 
              <Text className='w-2 h-2 rounded-full bg-[#DEDBDB]' /> 
            </View>
            <View className='absolute w-8 h-8 rounded-full bg-[#D3D3D3] flex items-center justify-center right-4 bottom-24'>
            <Image source={icons.slidearrow} resizeMode='contain' />
            </View>
           
         </View>
         <View className='flex items-start justify-center gap-1 mt-5' >
           <Text className='font-JakartaBold '> Size: 7UK</Text>
           <View className='flex flex-row items-center justify-center gap-2'>
                  <View className='border-[1px] border-[#FA7189] rounded-md p-2'>
                       <Text className='text-base font-JakartaMedium text-[#FA7189]'>6 UK</Text>
                  </View>
                  <View className=' bg-[#FA7189] rounded-md p-2'>
                       <Text className='text-base font-JakartaMedium text-white'>7 UK</Text>
                  </View>
                  <View className='border-[1px] border-[#FA7189] rounded-md p-2'>
                       <Text className='text-base font-JakartaMedium text-[#FA7189]'>8 UK</Text>
                  </View>
                  <View className='border-[1px] border-[#FA7189] rounded-md p-2'>
                       <Text className='text-base font-JakartaMedium text-[#FA7189]'>9 UK</Text>
                  </View>
                  <View className='border-[1px] border-[#FA7189] rounded-md p-2'>
                       <Text className='text-base font-JakartaMedium text-[#FA7189]'>10 UK</Text>
                  </View>
           </View>
             </View> 
      </ScrollView>
    </SafeAreaView>
  )
}

export default cart