import { configureStore } from "@reduxjs/toolkit"
import lightModeReducer from "./redux/LightMode/LightModeSlice"

const Store = configureStore({
  reducer: {
    lightMode: lightModeReducer,
  },
})

export default Store
