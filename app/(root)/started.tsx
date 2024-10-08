import { View, Text, Image } from 'react-native';
import React from 'react';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const Started = () => {
  return (
    <View className='flex-1'>
      <View className='inset-0'> 
        <Image
          source={images.getStarted}
          className='w-full h-full' 
          resizeMode="cover" 
        />
      </View>
      <View className='absolute bottom-10 left-0 right-0 items-center mx-4'> 
        <Text className='text-center text-5xl font-JakartaSemiBold text-white w-[250px]'>You want Authentic, here you go!</Text>
        <Text className='text-[#F2F2F2] py-2 text-lg'>Find it here, buy it now!</Text>
        <CustomButton 
           title='Get Started'
           className='mt-10'
           onPress={() => {
             router.push('/(root)/(tabs)/home'); 
          }}
        />
      </View>
    </View>
  );
};

export default Started;
