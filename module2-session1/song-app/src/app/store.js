import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

// contoh store pada redux
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
