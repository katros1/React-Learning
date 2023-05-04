import axios from "axios"; 
import { useEffect } from "react" 
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const fetchProducts = createAsyncThunk('productsFetched', () => {
    return axios.get('http://localhost:3000/api/v1/products/public').then(response => response.data.products)
})
export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action )=> {
            state.value = action.payload;
        })
    }
});

// export const { addToStock } =stockSlice.actions;
export default stockSlice.reducer;



// {
//     addToStock: (state) => {
//         useEffect(() => {
//             fetch('http://localhost:3000/api/v1/products/public')
//                 .then(res => {
//                     return res.json();
//                 })
//                 .then(data => {
//                     state.value = data.products;
                    
//                 })
//                 console.log(state.value);
//         }, [])
//     }
// }