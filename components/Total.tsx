import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import FormattedPrice from './FormattedPrice';
import CustomButton from './CustomButton';



const Total = ()  => {
    const {productData} = useSelector((state: RootState) => state.shop);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let amt = 0;
        productData.forEach((item) => {
          amt += item.price * item.quantity;
        });
        setTotalAmount(amt);
      }, [productData]);

  return (
    <View className='flex-1 mt-5'>
      <Text className='text-sm font-JakartaExtraBold'>Total</Text>
      <View className='border-[1px] border-gray-300 p-2 mt-1 rounded-md'>
          <View className='flex flex-row  items-center justify-between'>
              <Text className='text-sm font-JakartaSemiBold'>Total Amount</Text>
             <FormattedPrice amount={totalAmount} />
          </View>
          
      </View>
      <CustomButton className='mt-2 mb-2' title='Checkout' />
    </View>
  )
}

export default Total