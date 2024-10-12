import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '@/constants'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import WishItems from '@/components/WishItems'

const wishlist = () => {
  const  wishList = useSelector((state: RootState) => state.shop.wishList);
  return (
    <SafeAreaView className='flex-1 mx-2'>
      <ScrollView className='flex-1'>
      <View className='flex flex-row items-center justify-between '>
           <TouchableOpacity onPress={() => router.back()}>
             <Image resizeMode='contain' className='w-6 h-6' source={icons.backArrow}  />
             </TouchableOpacity>
            
             <View className='w-10 h-10 rounded-full bg-[#D3D3D3] flex items-center justify-center'>
             <Image resizeMode='contain' className='w-6 h-6' source={icons.cart}  />
             </View>
             
         </View>
           <View>
            {
               wishList.length > 0 ?
               ( 
                 <>
                      <WishItems wishList={wishList}  />
                      
                 </>
               ) : (
                 <View className='flex items-center h-screen justify-center gap-2'>
                  <Image className='w-40 h-40' source={images.noResult} resizeMode='contain' />
                  <Text className='text-2xl font-JakartaMedium '>Your wishlist is empty</Text>
                  <Link className='text-blue-500 ' href={'/(root)/(tabs)/shop'}>
                    Add items to your wishlist
                  </Link>
                </View>
               )
            }
           </View>
       
      </ScrollView>
    </SafeAreaView>
  )
}

export default wishlist