import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons, images, trending } from '@/constants'
import FormattedPrice from './FormattedPrice'
import { router } from 'expo-router'

const Trending = () => {
  return (
    <View className='flex w-[340px] flex-row justify-between'>
         {trending.map((item: any) => (
            <View key={item.id}
              className='flex gap-0.5 w-[170px] bg-slate-100 rounded-md shadow-lg p-2'>
                  <TouchableOpacity onPress={() => { 
                       router.push({
                        pathname: '/(root)/productDetails',
                        params: { 
                        id: item.id,
                       title: item.title,
                       desc: item.desc,
                      price: item.price,
                       image: item.image,
                     }
                    })}}>
             <Image resizeMode='contain' className='w-[160px] h-[130px] mx-auto rounded-md ' source={item.image} />
             </TouchableOpacity>
              <Text className='font-JakartaMedium text-base'>{item.title}</Text>
              <Text className='font-JakartaExtraLight text-sm '>{item.desc}</Text>
               <FormattedPrice amount={item.price} />
              <View className='flex flex-row items-center '>
              <Text className='text-gray-300 line-through'>₦{item.oldPrice}</Text> 
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
            </View>
         ))}
       
    </View>
  )
}

export default Trending