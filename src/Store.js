import { configureStore } from "@reduxjs/toolkit"
import darkModeReducer from "./redux/DarkMode/DarkModeSlice"

const Store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
})

export default Store
