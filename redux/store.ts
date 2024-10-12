// import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shopReducer from './shopSlice'; // Make sure the path is correct for your shopSlice
import { configureStore } from '@reduxjs/toolkit';

// Create a persist configuration
const persistConfig = {
  key: 'root',       // This is the key in storage
  storage: AsyncStorage, // Use AsyncStorage for react-native persistence
};

// Create a persisted reducer for shopSlice
const persistedReducer = persistReducer(persistConfig, shopReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: { shop: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific redux-persist actions that are non-serializable
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor
export const persistor = persistStore(store);

// Define the RootState and AppDispatch types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
