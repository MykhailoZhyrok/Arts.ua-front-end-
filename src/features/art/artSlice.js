import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    data: null,
    card: [],
    status: 'loading'
}

export const getArts = createAsyncThunk(
    'arts/fetchArts', async()=>{
        try{
            const {data} = await axios.get('/arts')
            return data
        }catch(err){
            console.log(err)
            
        }

})



const artSlice = createSlice({
    name: 'arts',
    initialState,
    reducers: {
        addToCard: (state, action)=>{
            state.status ='loading';
            state.card.push(action.payload);

            
        },
        removeItem: (state, action) => {
            state.status = 'loading';
            state.card = state.card.filter(item => item.id !== action.payload);
        },
        cleanOrder: (state, action)=>{
            state.status ='loading';
            state.card = [];

            
        },

    },
    extraReducers: (builder) => {
        builder
          .addCase(getArts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getArts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
          })
          .addCase(getArts.rejected, (state, action) => {
            state.data = ['error'];
            state.status = 'error';
          });
      },
})

export const { addToCard, removeItem, cleanOrder } = artSlice.actions;
export default artSlice.reducer