import { View, Text, Image,  ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { icons } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormattedPrice from '@/components/FormattedPrice';
import Product from '@/components/Product';

const ProductDetails = () => {
  const { id, title, desc, price, image } = useLocalSearchParams();
  const screenWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView className='flex-1 p-2'>
     <ScrollView className='flex-1'>
     <View className='flex flex-row items-center justify-between '>
           <TouchableOpacity onPress={() => router.back()}>
             <Image resizeMode='contain' className='w-6 h-6' source={icons.backArrow}  />
             </TouchableOpacity>
             <TouchableOpacity onPress={() => router.push('/(root)/(tabs)/cart')}>
             <View className='w-10 h-10 rounded-full bg-[#D3D3D3] flex items-center justify-center'>
             <Image resizeMode='contain' className='w-6 h-6' source={icons.cart}  />
             </View>
             </TouchableOpacity>
         </View>
       <View className='flex gap-1 mt-5'>
       <View className='w-full flex items-center justify-center relative'>
            <Image
              source={image}
              style={{ width: screenWidth, height: screenWidth * 0.70 }} 
              resizeMode='contain'
            />
            <View className='bg-[#D3D3D3] w-8 h-8 flex items-center justify-center rounded-full absolute right-4'>
             <Image
              source={icons.slidearrow}
              resizeMode='contain'
            />
            </View>
       </View>
       <View className='flex flex-row items-center pt-6 justify-center gap-2'>
              <Text className='w-3 h-3 rounded-full bg-[#DEDBDB]' />
              <Text className='w-3 h-3 rounded-full bg-[#FFA3B3]' />
              <Text className='w-3 h-3 rounded-full bg-[#DEDBDB]' /> 
              <Text className='w-3 h-3 rounded-full bg-[#DEDBDB]' /> 
              <Text className='w-3 h-3 rounded-full bg-[#DEDBDB]' /> 
            </View>
            <Text className='text-sm font-JakartaBold'>Size: 7UK</Text>
            <View className='flex flex-row items-center gap-1 '>
                <View className='border-[2px] py-1 px-2 border-[#FA7189] rounded-md'>
                    <Text className='text-[#FA7189] font-JakartaSemiBold'>6 UK</Text>
                </View>
                <View className=' py-1 px-2 bg-[#FA7189] rounded-md'>
                    <Text className='text-white font-JakartaSemiBold'>7 UK</Text>
                </View>
                <View className='border-[2px] py-1 px-2 border-[#FA7189] rounded-md'>
                    <Text className='text-[#FA7189] font-JakartaSemiBold' >8 UK</Text>
                </View>
                <View className='border-[2px] py-1 px-2 border-[#FA7189] rounded-md'>
                    <Text className='text-[#FA7189] font-JakartaSemiBold'>9 UK</Text>
                </View>
                <View className='border-[2px] py-1 px-2 border-[#FA7189] rounded-md'>
                    <Text className='text-[#FA7189] font-JakartaSemiBold'>10 UK</Text>
                </View>
            </View>
            <Text className='text-lg font-JakartaExtraBold'>{title}</Text>
            <View className='flex flex-row items-center '>
            <View className='flex flex-row items-center'>
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            </View>
            <Text className='text-gray-300 ml-2'>24672 </Text>
            </View>
         <View className='flex flex-row items-center '>
         <Text className='text-gray-300 line-through mr-2'>₦16,000</Text> 
          <FormattedPrice amount={price} />
          <Text className='ml-2 font-JakartaBold text-[#FA7189] '>50% off</Text>
         </View>
         <View className='mt-4 flex gap-1'>
            <Text className='font-JakartaExtraBold text-lg'>Product Details</Text>
         <Text>{desc}</Text>
         </View>
         <View className='flex flex-row items-center justify-start gap-2'>
            <View className='bg-[#FA7189] rounded-md p-2'>
                <TouchableOpacity>
                    <Text className='text-white'>Add to cart</Text>
                </TouchableOpacity>
            </View>
            <View className='bg-[#4392F9] rounded-md p-2'>
                <TouchableOpacity>
                <Text className='text-white'>Add to wish</Text>
                </TouchableOpacity>
            </View>
         </View>
         <View className='flex py-5 gap-1 '>
         <Text className='text-xl font-JakartaExtraBold  '>Similar Products</Text>
         <View className='flex flex-row items-center justify-between p-2'>
          <Text className='font-JakartaBold text-lg'>2,542+ Items</Text>
          <View className='flex flex-row items-center gap-3'>
      
            <View className='flex flex-row items-center bg-white rounded-lg p-2 shadow-md'>
              <Text>Sort</Text>
              <Image source={icons.vector} className='w-3 h-3' resizeMode='contain' />
            </View>
            <View className='flex flex-row items-center bg-white rounded-lg p-2 shadow-md'>
              <Text>Filter</Text>
              <Image source={icons.vector2} className='w-3 h-3' resizeMode='contain' />
            </View>
          </View>
        </View>
         </View>
         <View>
             <Product />
         </View>
        </View>
  
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
