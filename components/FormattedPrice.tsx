import React from 'react';
import { Text } from 'react-native';

interface FormattedPriceProps {
  amount: number;
}

const FormattedPrice: React.FC<FormattedPriceProps> = ({ amount }) => {
  const formattedAmount = isNaN(amount)
    ? '₦0.00'
    : new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 2,
      }).format(amount);

  return <Text className='font-JakartaBold'>{formattedAmount}</Text>;
};

export default FormattedPrice;





