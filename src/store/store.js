import {configureStore} from '@reduxjs/toolkit'
import artSlice from '../features/art/artSlice'
import OrderSlice from '../features/art/OrderSlice'

export const store = configureStore({
    reducer:{
        arts: artSlice,
        odrers: OrderSlice,
        
    },
}) 