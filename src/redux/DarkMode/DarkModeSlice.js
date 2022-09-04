import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  darkMode: false,
}

const darkModeSlice = createSlice({
  name: "darkModeSlice",
  initialState,
  reducers: {
    light: (state) => {
      state.darkMode = false
    },
    dark: (state) => {
      state.darkMode = true
    },
    toggle: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

const { reducer, actions } = darkModeSlice

export const { light, dark, toggle } = actions
export default reducer
