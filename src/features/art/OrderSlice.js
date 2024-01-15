import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    data: null,
    card: [],
    status: 'loading'
}

export const postOrder = createAsyncThunk(
    'order/postArts', async({name,
        lastName,
        number,
        adress,
        email,
        payments,
        orders})=>{
        try{
            const {data} = await axios.post('/order', {name,
                lastName,
                number,
                adress,
                email,
                payments,
                orders})
            return data
        }catch(err){
            console.log(err)
            
        }

})



const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
 
    },
    
})

export default orderSlice.reducer