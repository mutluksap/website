import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    status: "idle",
    error: null
}

export const fetchProjects = createAsyncThunk('Projects/Fetch', async () => {
    const response = await axios.get('https://api.github.com/users/mutluksap/repos')
    return response.data
})

const Projects = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder
        .addCase(fetchProjects.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchProjects.rejected, (state, action) => {
            state.status = "error";
        })
        .addCase(fetchProjects.fulfilled, (state, action) => {
            state.status = "done"
            state.data = action.payload
        })
    }
})

export default Projects;