import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images, products } from '@/constants'
import GoogleTextInput from '@/components/GoogleTextInput'
import { TouchableOpacity } from 'react-native'


const wishlist = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1'> 
      <View className='flex flex-row items-center justify-between p-2'>
          <View>
            <Image source={icons.hamburger} resizeMode='contain' />
          </View>
          <View>
            <Image source={images.icon} className='w-[100px] h-[32px]' resizeMode='contain' />
          </View>
          <View>
            <Image source={icons.user} resizeMode='contain' />
          </View>
        </View>
        <View className='p-2'>
          <GoogleTextInput 
            containerStyle="bg-neutral-100"
            textInputBackgroundColor="#f5f5f5"
            handlePress={() => {}}
          />
        </View>
        <View className='flex flex-row items-center justify-between p-2'>
          <View>
            <Text className='font-JakartaBold text-lg'>52,082+ Items </Text>
          </View>
          <View className='flex flex-row items-center justify-between gap-3'>
            <View className='flex flex-row items-center justify-between bg-white rounded-lg p-2 shadow-md'>
              <Text>Sort</Text>
              <Image source={icons.vector} className='w-3 h-3' resizeMode='contain' />
            </View>
            <View className='flex flex-row items-center justify-between bg-white rounded-lg p-2 shadow-md'>
              <Text>Filter</Text>
              <Image source={icons.vector2} className='w-3 h-3' resizeMode='contain' />
            </View>
          </View>
        </View>
        <View className='flex flex-row flex-wrap justify-center gap-2'>
           {products.map((item: any) => (
             <View key={item.id} className='flex items-center justify-center gap-0.5 w-[200px] bg-slate-100 rounded-md shadow-lg p-2'>
          
             <Image resizeMode='cover' className='w-[160px] h-[130px] rounded-md ' source={item.image} />
            
           <View className='flex items-start justify-center'>
              <Text className='font-JakartaBold  text-base'>{item.title}</Text>
              <Text className='font-JakartaMedium text-xs'>{item.description}</Text>
              <Text className='font-JakartaBold'>₦{item.price}</Text> 
              <View className='flex flex-row items-center '>
            <View className='flex flex-row items-center'>
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            </View>
            <Text className='text-gray-300 ml-2'>24672 </Text>
            </View>
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
           ))}
        </View>
     
      </ScrollView>
    </SafeAreaView>
  )
}

export default wishlist