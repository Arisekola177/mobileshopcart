import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQty, deleteItem, deleteWish, increaseQty, resetCart, resetWish } from '@/redux/shopSlice';
import Toast from 'react-native-toast-message';
import { icons } from '@/constants';
import FormattedPrice from './FormattedPrice';

interface WishlistItem  {
    id: string;
    title: string;
    brand: string;
    category: string;
    description: string;
    quantity: number;
    price: number;
    image: any; 
}

interface WishItemsProps {
    wishList: WishlistItem[]; 
}

const WishItems: React.FC<WishItemsProps> = ({ wishList }) => {
     const dispatch = useDispatch()
    return (
        <View className='flex  mt-2'>
            {wishList.map((item: WishlistItem) => (
                <View key={item.id} className='flex border-b-[1px] p-1 shadow-lg bg-white border-gray-400' >
                    <TouchableOpacity onPress={() => {dispatch(deleteWish(item.id));
                       Toast.show({
                        type: 'success',
                        text1: `${item.title} has been removed from the cart`,
                      })}} className='p-1'>
                        <Text className='text-red-500 text-xs'>remove</Text>
                    </TouchableOpacity>
                 <View className='flex flex-row items-center p-2 justify-around gap-2'>
                    
                    <View className='w-[140px]'>
                    <Image source={ item.image} className='w-full' resizeMode='contain' />
                    </View>
                      <View className='flex gap-1'>
                    <Text className='text-base font-JakartaBold'>{item.title}</Text>
                     <View className='flex flex-row items-center justify-center '>
                    <Text className='font-JakartaSemiBold text-sm mr-1'>Variation:</Text>
                    <View className='border-[1px]  py-1 mr-1 px-2 rounded-md'>
                    <Text className='text-xs' >Red</Text>
                    </View>
                    <View className='border-[1px]  py-1 px-2 rounded-md'>
                    <Text className='text-xs'>Green</Text>
                     </View>
                    </View>
                    <View className='flex flex-row'>
                        <Text className='text-sm font-JakartaSemiBold'>4.8 </Text>
                        <View className='flex flex-row items-center'>
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            <Image source={icons.star} className='w-4 h-4' />
            </View>
                 </View>
                    <View className='flex flex-row items-center justify-between '>
                    <View className='border-[1px] border-gray-400 rounded-md p-1 flex items-center justify-center '>
                    <FormattedPrice  amount={item.price } />
                    </View>
                    <View className='flex items-center justify-center ml-1'>
                            <Text className='text-xs text-red-500'>upto 28% off</Text>
                            <Text className='text-gray-300 font-JakartaSemiBold text-sm line-through'> ₦ 20,000</Text>
                    </View>
                    </View>
                
                     </View>
                </View>
                </View>
            ))}
            <View className='bg-red-500 w-[90px] p-2 mt-2 rounded-lg'>
                <TouchableOpacity onPress={() => {
                    dispatch(resetWish());
                      Toast.show({
                        type: 'success',
                        text1: `Wishlist cleared!`,
                      });
                }}>
                <Text className='text-white font-JakartaMedium text-xs'>Clear wishlist</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

export default WishItems;

