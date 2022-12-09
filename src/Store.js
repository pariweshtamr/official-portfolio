import { configureStore } from "@reduxjs/toolkit"
import lightModeReducer from "./redux/DarkMode/LightModeSlice"

const Store = configureStore({
  reducer: {
    lightMode: lightModeReducer,
  },
})

export default Store
