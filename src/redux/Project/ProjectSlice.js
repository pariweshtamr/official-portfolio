import { createSlice } from "@reduxjs/toolkit"
import projects from "../../constants/projects"

const initialState = {
  isLoading: false,
  projects: projects,
  selectedProject: {},
}

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true
    },
    getSingleProjectSuccess: (state, { payload }) => {
      state.isLoading = false
      state.selectedProject = payload
    },
  },
})

const { reducer, actions } = projectSlice

export const { requestPending, getSingleProjectSuccess } = actions

export default reducer
