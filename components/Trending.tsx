import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'

const Trending = () => {
  return (
    <View className='flex flex-row items-center gap-2 relative'>
         <View className='flex gap-0.5 w-[200px] bg-slate-100 rounded-md shadow-lg p-2'>
           <Image resizeMode='contain' className='w-[160px] h-[130px] rounded-md ' source={images.watch} />
            <Text className='font-JakartaExtraLight text-base'>IWC Schaffhausen
            2021 Pilot's Watch "SIHH 2019" 44mm</Text>
            <Text className='font-JakartaSemiBold'>₦30,000</Text>
            <View className='flex flex-row items-center '>
            <Text className='text-gray-300 line-through'>₦50,000</Text> 
            <Text className='text-red-500 ml-1'>40% Off</Text> 
            
            </View>
            <View className='flex flex-row gap-1 items-start py-1 justify-start'>
                <View>
                  <TouchableOpacity className='bg-red-500 p-1 rounded-md'>
                    <Text className='text-white text-xs'>Add to cart</Text> 
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity className='bg-blue-500 p-1 rounded-md'>
                    <Text className='text-white text-xs'>Add to wishlist</Text> 
                  </TouchableOpacity>
                </View>
            </View>
         </View>
         <View className='flex gap-0.5 w-[200px] bg-slate-100 rounded-md shadow-lg p-2  '>
           <Image resizeMode='contain' className='w-[160px] h-[130px] rounded-md ' source={images.sneaker} />
            <Text className='font-JakartaExtraLight text-base'>Labbin White </Text>
            <Text className='font-JakartaExtraLight text-base'>Sneakers</Text>
            <Text className='font-JakartaExtraLight text-base'> For Men and Female</Text>
            <Text className='font-JakartaSemiBold'>₦80,000</Text>
            <View className='flex flex-row items-center'>
            <Text className='text-gray-300 line-through'>₦120,000</Text> 
            <Text className='text-red-500 ml-1'>30% Off</Text> 
            </View>
            <View className='flex flex-row gap-1 items-start py-1 justify-start'>
                <View>
                  <TouchableOpacity className='bg-red-500 p-1 rounded-md'>
                    <Text className='text-white text-xs'>Add to cart</Text> 
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity className='bg-blue-500 p-1 rounded-md'>
                    <Text className='text-white text-xs'>Add to wishlist</Text> 
                  </TouchableOpacity>
                </View>
            </View>
         </View>
       
         <View className='absolute right-2  bg-[#D3D3D3] rounded-full p-1 bottom-20'>
         <Image resizeMode='contain' source={icons.slidearrow} />
         </View>
         
    </View>
  )
}

export default Trending