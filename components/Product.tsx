import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'


const Product = () => {
  return (
    <View className='flex flex-row justify-between gap-1'>
         <View 
          className='flex gap-0.5 w-[200px] bg-slate-100 rounded-md shadow-lg p-2'>
           <Image resizeMode='contain' className='w-[160px] h-[130px] mx-auto rounded-md ' source={images.kutan} />
            <Text className='font-JakartaMedium text-base'>Women Printed Kurta</Text>
            <Text className='font-JakartaExtraLight text-sm '>Neque porro quisquam est qui dolorem ipsum quia</Text>
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
            <Text className='text-gray-300 ml-2'>45372 </Text>
            </View>
            <View className='flex flex-row gap-1 items-start py-1 justify-start'>
                <View>
                  <TouchableOpacity onPress={() => {}} className='bg-red-500 p-1 rounded-md'>
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
         <View className='flex gap-0.5 w-[200px] bg-slate-100 rounded-md shadow-lg p-2 '>
           <Image resizeMode='contain' className='w-[160px] h-[130px] rounded-md ' source={images.footwear} />
            <Text className='font-JakartaMedium text-base'>HRX by Hrithik Roshan</Text>
            <Text className='font-JakartaExtraLight text-sm '>Neque porro quisquam est qui dolorem ipsum quia</Text>
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
            <Text className='text-gray-300 ml-2'>24672 </Text>
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
    </View>
  )
}

export default Product