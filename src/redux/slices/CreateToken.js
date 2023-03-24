import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    error: null
}

var authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body : 'grant_type=client_credentials&client_id=111260e6bc964366b64b31857e152c6e&client_secret=30958a8c2f3747d193a91252b810d2d3'
  }

export const fetchcreateToken = createAsyncThunk(
    //action type string
    'CreateToken/Fetch',
    // callback function
    async () => {
      const res = await fetch('https://accounts.spotify.com/api/token', authParameters).then(
      (data) => data.json()
    )
    return res
  })

const createToken = createSlice({
    name: "createToken",
    initialState,
    reducers: {},
    extraReducers (builder)  {
        builder
        .addCase(fetchcreateToken.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchcreateToken.rejected, (state, action) => {
            state.status = "error";
        })
        .addCase(fetchcreateToken.fulfilled, (state, action) => {
            state.status = "done"

            const now = new Date()
            const saveItem = {
                token: action.payload.access_token,
                date: `${now.getHours()}:${now.getMinutes()}`
            }

            localStorage.setItem(('s_access_token'), JSON.stringify(saveItem))

            state.data = action.payload
        })
    }
})

export default createToken;