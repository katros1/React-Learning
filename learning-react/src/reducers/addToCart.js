import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
};
 
const  cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct:( state, action ) => {
            state.product.push(action.payload)
        },
        removeProduct:( state, action ) => {
            const index = state.product.indexOf(action.payload);
            if (index == -1){
                return;
            }
            state.product.splice(index, 1);
        }
    }
})

export const {addProduct, removeProduct } = cartSlice.actions 
export default cartSlice.reducer;