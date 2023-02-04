import { configureStore } from "@reduxjs/toolkit"
import lightModeReducer from "./redux/LightMode/LightModeSlice"
import projectReducer from "./redux/Project/ProjectSlice"
import activeTabReducer from "./redux/ActiveTab/TabSlice"

const Store = configureStore({
  reducer: {
    lightMode: lightModeReducer,
    project: projectReducer,
    activeTab: activeTabReducer,
  },
})

export default Store
