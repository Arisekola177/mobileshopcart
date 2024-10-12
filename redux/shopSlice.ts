import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
  image: string ; 
}

interface WishlistItem {
  id: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
  image: string ; 
}

interface ShopState {
  productData: Product[];
  wishList: WishlistItem[];
}

const initialState: ShopState = {
  productData: [],
  wishList: [],
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItem = state.productData.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.productData.push(newItem);
      }
    },
    increaseQty: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQty: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.productData.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.productData = state.productData.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addToWish: (state, action: PayloadAction<WishlistItem>) => {
      const item = state.wishList.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.wishList.push(action.payload);
      }
    },
    deleteWish: (state, action: PayloadAction<string>) => {
      state.wishList = state.wishList.filter((item) => item.id !== action.payload);
    },
    resetWish: (state) => {
      state.wishList = [];
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  resetCart,
  deleteItem,
  addToWish,
  deleteWish,
  resetWish,
} = shopSlice.actions;

export default shopSlice.reducer;
