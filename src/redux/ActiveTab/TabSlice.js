import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedTab: "/home",
}

const activeTabSlice = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    onTabChange: (state, { payload }) => {
      state.selectedTab = payload
    },
  },
})

const { reducer, actions } = activeTabSlice
export const { onTabChange } = actions

export default reducer
