import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import navigationReducer from './features/navigationSlice'

export const store = configureStore({
  reducer: {
    authReducer,
    navigationReducer
  },
})