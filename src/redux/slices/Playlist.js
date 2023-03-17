import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: "iddle",
    error: null
}

export const fetchPlayList = createAsyncThunk('fetch/PlayList', async (token) => {
    const new_token = token.substring(1, token.length - 1);
    const response = await axios.get('https://api.spotify.com/v1/playlists/7aXbmbihRPTetgzFsdXx4d', {
        headers: {
            Authorization: "Bearer " + new_token,
        },
    })
    .then(res => console.log(res.data));
})

const playList = createSlice({
    "name" : "playlist",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchPlayList.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchPlayList.rejected, (state, action) => {
            state.status = "error";
        })
        .addCase(fetchPlayList.fulfilled, (state, action) => {
            state.status = "done"
            state.data = action.payload
        })
    }
})

export default playList;