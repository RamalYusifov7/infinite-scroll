<!--                                  Redux toolkit -->



--                                         STORE.js

import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {},
})




--                                        SLICE.js

import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const counterSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    }
  },
   extraReducers: (builder) => {
    builder
      .addCase(__, (state, action) => {
        
      })
  }
})

export const {  } = counterSlice.actions
export default counterSlice.reducer





------   createAsyncThunk 

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (u_, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

<!--                                  Custom Axios -->



import axios from "axios";

export const globalApi =axios.create({
    baseURL:process.env.REACT_APP_URL
})



<!--                                  Context API -->
import { createContext } from "react";

const GlobalContext=createContext()

export const GlobalContextProivder=({children})=>{
    return(
        <GlobalContext value={{}}>
            {children}
        </GlobalContext>
    )
}