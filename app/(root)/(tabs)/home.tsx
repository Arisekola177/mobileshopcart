import { View, Text, Image, ScrollView } from 'react-native'; 
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeImages, icons, images } from '@/constants';
import GoogleTextInput from '@/components/GoogleTextInput';
import Product from '@/components/Product';

const Home = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
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
            <Text className='font-JakartaBold text-lg'>All Featured</Text>
          </View>
          <View className='flex flex-row items-center justify-between gap-3'>
            <View className='flex flex-row items-center justify-center bg-white rounded-lg p-2 shadow-md'>
              <Text>Sort</Text>
              <Image source={icons.vector} className='w-3 h-3' resizeMode='contain' />
            </View>
            <View className='flex flex-row items-center justify-center bg-white rounded-lg p-2 shadow-md'>
              <Text>Filter</Text>
              <Image source={icons.vector2} className='w-3 h-3' resizeMode='contain' />
            </View>
          </View>
        </View>
        <View className='flex flex-row items-center justify-between p-2'>
          {homeImages.map((item: any) => (
            <View className='flex items-center justify-center' key={item.id}>
              <Image source={item.image} resizeMode='contain' />
              <Text>{item.title}</Text>
            </View>
          ))}
        </View>
        <View className='p-2 flex-1'>
          <View className='relative w-[343px] h-[250px]'>
            <Image source={images.shopping} resizeMode='contain' /> 
            <View className='flex absolute bottom-24 px-4 w-[146px] h-[109px]'>
              <Text className='text-white font-JakartaExtraBold text-xl'>50-40% OFF</Text>
              <Text className='text-white font-JakartaExtraLight'>Now in (product)</Text> 
              <Text className='text-white font-JakartaExtraLight'>All colours</Text> 
              <View className='border-[1px] border-white rounded-md mt-2 flex flex-row items-center p-3 justify-between'>
                <Text className='text-white'>Shop Now</Text>
                <Image source={icons.vector3} resizeMode='contain' />
              </View>
            </View>
            <View className='flex flex-row items-center pt-6 justify-center gap-2'>
              <Text className='w-3 h-3 rounded-full bg-[#DEDBDB]' />
              <Text className='w-4 h-4 rounded-full bg-[#FFA3B3]' />
              <Text className='w-3 h-3 rounded-full bg-[#DEDBDB]' /> 
            </View>
          </View>
        </View>
        <View className='px-2'>
          <Image source={images.deal} resizeMode='contain' />
        </View>
         <View className='mt-2 p-2'>
           <Product />
         </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
