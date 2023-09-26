import { createSlice } from "@reduxjs/toolkit";
import { stringify } from "postcss";
import { toast } from "react-toastify";

const defaultState = {
    cartItems: [],
    numItemsInCart : 1,
    cartTotal: 0,
    shipping: 50,
    tax: 0,
    orderTotal: 0,
}

const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultState;
}

const cartSlice = createSlice({
    name: 'cart',

    initialState: getCartFromLocalStorage,

    reducers: {
        addItem : (state, action) => {},
        clearItem : (state) => {},
        removeItem : (state, action) => {},
        editItem : (state, action) => {},

        calculateTotals: (state) => {

        }
    }

})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;