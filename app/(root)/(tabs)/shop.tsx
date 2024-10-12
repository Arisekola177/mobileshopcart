
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images, products } from '@/constants';
import GoogleTextInput from '@/components/GoogleTextInput';
import Topbar from '@/components/Topbar';
import { useDispatch } from 'react-redux';
import { addToCart, addToWish } from '@/redux/shopSlice';
import Toast from 'react-native-toast-message';
import FormattedPrice from '@/components/FormattedPrice';
import { router, useNavigation } from 'expo-router';

const Shop = () => {
  const dispatch = useDispatch();
  
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1'>
        <View className='p-2'>
          <Topbar />
        </View>
        <View className='p-2'>
          <GoogleTextInput 
            containerStyle="bg-neutral-100"
            textInputBackgroundColor="#f5f5f5"
            handlePress={() => {}}
          />
        </View>
        <View className='flex flex-row items-center justify-between p-2'>
          <Text className='font-JakartaBold text-lg'>52,082+ Items</Text>
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

        <View className='flex flex-row flex-wrap justify-center gap-2'>
          {products.map((item: any) => (
            <View key={item.id} className='flex  justify-center gap-0.5 w-[164px] bg-slate-100 rounded-md shadow-lg p-2'>
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
              <Image resizeMode='cover' className='w-[160px] h-[130px] rounded-md' source={item.image} />
              </TouchableOpacity>
              <View className='flex items-start justify-center'>
                <Text className='font-JakartaBold text-base'>{item.title}</Text>
                 <Text className='font-JakartaMedium text-xs'>{item.desc.length > 100 ? `${item.desc.slice(0, 100)}...` : item.desc}</Text>
               <FormattedPrice amount={item.price} />
                <View className='flex flex-row items-center'>
                  <View className='flex flex-row items-center'>
                    <Image source={icons.star} className='w-4 h-4' />
                    <Image source={icons.star} className='w-4 h-4' />
                    <Image source={icons.star} className='w-4 h-4' />
                    <Image source={icons.star} className='w-4 h-4' />
                  </View>
                  <Text className='text-gray-300 ml-2'>24672</Text>
                </View>
              </View>

              <View className='flex flex-row gap-1 items-start py-1'>
                <TouchableOpacity 
                  onPress={() => {
                    dispatch(addToCart({
                      id: item.id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    }));
                    Toast.show({
                      type: 'success',
                      text1: `${item.title} added successfully!`,
                    });
                  }} 
                  className='bg-red-500 p-1 rounded-md'>
                  <Text className='text-white text-xs'>Add to cart</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => {
                  dispatch(addToWish({
                    id: item.id,
                    brand: item.brand,
                    category: item.category,
                    description: item.description,
                    image: item.image,
                    price: item.price,
                    title: item.title,
                    quantity: 1,
                  }));
                  Toast.show({
                    type: 'success',
                    text1: `${item.title} added successfully!`,
                  });
                }} 
                className='bg-blue-500 p-1 rounded-md'>
                  <Text className='text-white text-xs'>Add to wishlist</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;
