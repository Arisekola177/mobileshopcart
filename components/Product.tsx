import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'

const Product = () => {
  return (
    <View className='flex flex-row items-center gap-2'>
         <View className='flex gap-0.5 w-[170px] h-[241px] bg-slate-100 rounded-md shadow-lg '>
           <Image resizeMode='contain' className='w-[160px] h-[130px] rounded-md ' source={images.kutan} />
            <Text className='font-JakartaMedium text-base'>Women Printed Kurta</Text>
            <Text className='font-JakartaMedium text-sm '>Neque porro quisquam est qui dolorem ipsum quia</Text>
            <Text className='font-JakartaSemiBold'>₦16,800</Text>
            <View className='flex flex-row items-center '>
            <Text className='text-gray-300 line-through'>₦21,000</Text> 
            <Text className='text-red-500 ml-1'>20% Off</Text> 
            </View>
            <View className='flex flex-row items-center '>
            <View className='flex flex-row items-center'>
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            </View>
            <Text className='text-gray-300'>453672 </Text>
            </View>
         </View>
         <View className='flex gap-0.5 w-[170px] h-[241px] bg-slate-100 rounded-md shadow-lg  '>
           <Image resizeMode='contain' className='w-[160px] h-[130px] rounded-md ' source={images.footwear} />
            <Text className='font-JakartaMedium text-base'>HRX by Hrithik Roshan</Text>
            <Text className='font-JakartaMedium text-sm '>Neque porro quisquam est qui dolorem ipsum quia</Text>
            <Text className='font-JakartaSemiBold'>₦50,000</Text>
            <View className='flex flex-row items-center'>
            <Text className='text-gray-300 line-through'>₦100,000</Text> 
            <Text className='text-red-500 ml-1'>50% Off</Text> 
            </View>
            <View className='flex flex-row items-center '>
            <View className='flex flex-row items-center'>
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            </View>
            <Text className='text-gray-300'>2467272 </Text>
            </View>
         </View>
    </View>
  )
}

export default Product