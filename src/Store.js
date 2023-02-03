import { configureStore } from "@reduxjs/toolkit"
import lightModeReducer from "./redux/LightMode/LightModeSlice"
import projectReducer from "./redux/Project/ProjectSlice"

const Store = configureStore({
  reducer: {
    lightMode: lightModeReducer,
    project: projectReducer,
  },
})

export default Store
