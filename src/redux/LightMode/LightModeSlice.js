import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  lightMode: false,
}

const lightModeSlice = createSlice({
  name: "lightModeState",
  initialState,
  reducers: {
    light: (state) => {
      state.lightMode = true
    },
    dark: (state) => {
      state.lightMode = false
    },
    toggle: (state) => {
      state.lightMode = !state.lightMode
      sessionStorage.setItem("lightMode", JSON.stringify(state.lightMode))
    },
  },
})

const { reducer, actions } = lightModeSlice

export const { light, dark, toggle } = actions
export default reducer
