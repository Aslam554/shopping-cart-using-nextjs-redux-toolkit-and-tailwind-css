import {configureStore} from "@reduxjs/toolkit"
import cartReducer from '../Cartslice/page'

const store = configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export default store