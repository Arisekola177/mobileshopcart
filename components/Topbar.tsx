import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons, images } from '@/constants'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { router } from 'expo-router';

const Topbar = () => {
    const productData = useSelector((state: RootState) => state.shop.productData);
    const wishlist = useSelector((state: RootState) => state.shop.wishList);
  return (
    <View className='flex flex-row items-center justify-between '>
          <View>
            <Image source={icons.hamburger} resizeMode='contain' />
          </View>
          <View>
            <Image source={images.icon} className='w-[100px] h-[32px]' resizeMode='contain' />
          </View>
          <View className='flex flex-row items-center justify-center gap-3'>
            <View className='flex flex-row items-center justify-center gap-2'>
                <View className='relative'>
                  <TouchableOpacity onPress={() => router.push('/(root)/(tabs)/cart')}>
                <Image source={icons.cart} className='w-6 h-6' resizeMode='contain' />
                <View className='absolute right-0 -top-2 bg-red-500 p-1 rounded-2xl'>
                    <Text className='text-white text-xs'>{productData ? productData.length : 0}</Text>
                </View>
                </TouchableOpacity>
              </View>
            <View className='relative'> 
            <TouchableOpacity onPress={() => router.push('/(root)/wishlist')}>
            <Image source={icons.heart} className='w-6 h-6' resizeMode='contain' />
            <View className='absolute right-0 -top-2 bg-red-500 p-1 rounded-2xl'>
                    <Text className='text-white text-xs'>{wishlist ? wishlist.length : 0}</Text>
                </View>
                </TouchableOpacity>
            </View>
            </View>
            <Image source={icons.user} resizeMode='contain' />
          </View>
        </View>
  )
}

export default Topbar