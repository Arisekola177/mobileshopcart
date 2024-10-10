import { View, Text, Image, ScrollView } from 'react-native'; 
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeImages, icons, images } from '@/constants';
import GoogleTextInput from '@/components/GoogleTextInput';
import Product from '@/components/Product';
import Trending from '@/components/Trending';

const Home = () => {
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
            <Text className='font-JakartaBold text-lg'>All Featured</Text>
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
        <View className='flex flex-row items-center justify-between p-2'>
          {homeImages.map((item: any) => (
            <View className='flex items-center justify-center' key={item.id}>
              <Image source={item.image} resizeMode='contain' />
              <Text>{item.title}</Text>
            </View>
          ))}
        </View>
        <View className='flex items-center w-full justify-center mt-2'>
          <View className='relative '>
            <Image source={images.shopping} className='w-[400px]' resizeMode='cover' /> 
            <View className='flex absolute bottom-24 px-4 '>
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
        <View className='mx-2 mt-2 p-3 bg-[#4392F9] flex flex-row items-center justify-between rounded-md'>
           <View className='flex gap-2'>
               <Text className='text-base font-JakartaMedium text-white'>Deal of the Day</Text> 
               <View className='flex flex-row'>
               <Image source={icons.clock} resizeMode='contain' />
               <Text className='text-white'>22h 55m 20s remaining </Text> 
               </View>
           </View>
           <View className='border-[1px] border-white rounded-md mt-2 flex flex-row items-center p-2 gap-1 justify-between'>
           <Text className='text-white'>View all</Text>
           <Image source={icons.vector3} resizeMode='contain' />
            </View>
        </View>
         <View className='flex items-center justify-center mt-2'>
           <Product />
         </View>
         <View className='flex flex-row items-center justify-center mt-8 p-2'>
            <View className='w-[100px] h-[60px]  '>
            <Image source={images.offer} className='w-full'  resizeMode='contain' />
            </View>
            <View className='items-start w-[171px] h-[60px] gap-1'>
            <View className='flex flex-row items-center '>
                <Text className='font-JakartaMedium text-xl'>Special Offers</Text> 
                <Image source={images.offerImage}  resizeMode='contain' />
            </View>
            <Text className='font-JakartaExtraLight'>We make sure you get the offer you need at best prices</Text> 
            </View>
         </View>
         <View className='mt-8  w-full flex items-center justify-center'>
            <View className='flex flex-row items-center justify-around bg-white p-4 w-full'>
                  <View>
                  <Image source={images.heels}  resizeMode='contain' />
                  </View>
                  <View className='flex items-start gap-1'>
                      <Text className='font-JakartaMedium text-xl'>Flat and Heels</Text> 
                      <Text className=''>Stand a chance to get rewarded</Text> 
                      <View className='bg-[#F83758] rounded-md mt-2 flex flex-row items-center p-1 gap-1 justify-between'>
                <Text className='text-white'>Visit Now</Text>
                <Image source={icons.vector3} resizeMode='contain' />
              </View>
                  </View>
            </View>
         <View className='mt-4 w-full'>
         <View className='mx-2 mt-2 p-3 bg-[#FD6E87] flex flex-row items-center justify-between rounded-md'>
           <View className='flex gap-2'>
               <Text className='text-base font-JakartaMedium text-white'>Trending Products </Text> 
               <View className='flex flex-row'>
               <Image source={icons.calender} resizeMode='contain' />
               <Text className='text-white'>Last Date 29/12/24 </Text> 
               </View>
           </View>
           <View className='border-[1px] border-white rounded-md mt-2 flex flex-row items-center p-2 gap-1 justify-between'>
           <Text className='text-white'>View all</Text>
           <Image source={icons.vector3} resizeMode='contain' />
            </View>
        </View>
         </View>
         </View>
         <View className='mt-2 flex items-center justify-center'>
             <Trending />
             <View className='mt-8 mb-4'>
             <Image source={images.hot}  className='w-[400px]' resizeMode='cover' />
              <View className=' p-1 flex flex-row items-center justify-between rounded-md'>
           <View className='flex gap-1'>
               <Text className='text-base font-JakartaBold'>New Arrivals </Text> 
               <Text className=''>Summer’ 25 Collections </Text> 
              
           </View>
           <View className='bg-[#F83758] rounded-md mt-2 flex flex-row items-center p-2 gap-1 justify-between'>
           <Text className='text-white'>View all</Text>
           <Image source={icons.vector3} resizeMode='contain' />
            </View>
        </View>
             </View>
             <View className='mt-4  flex items-start justify-center gap-1'>
              <Text className='mb-3 font-JakartaBold text-base '>Sponsored</Text>
             <Image source={images.discount} className='w-[400px]'   resizeMode='cover' />
             <Text className='mb-3 font-JakartaBold text-lg '>Up to 50% off</Text>
             </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
