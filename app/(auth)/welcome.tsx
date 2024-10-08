import {  Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import { onboarding } from '@/constants'
import CustomButton from '@/components/CustomButton'

const Onboarding = () => {

  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setactiveIndex] = useState(0)
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-center bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/signUp");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#ff025f] rounded-full" />
        }
        onIndexChanged={(index) => setactiveIndex(index)}
      >
        {onboarding.map((item: any) => (
          <View key={item.id}>
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full ">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="font-JakartaSemiBold text-gray-500 text-sm mx-10 mt-3 text-center">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton  
         title={isLastSlide ? 'Get Started' : 'Next'}
         onPress={() => isLastSlide ? router.replace('/(auth)/signIn') : swiperRef.current?.scrollBy(1)}
         className='w-11/12 mt-5 mb-5'
      />
    </SafeAreaView>
  );
}

export default Onboarding