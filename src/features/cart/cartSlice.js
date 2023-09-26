import { createSlice } from "@reduxjs/toolkit";
import { stringify } from "postcss";
import { toast } from "react-toastify";

const defaultState = {
    cartItems: [

    ],
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
        addItem : (state, action) => {
            const product = action.payload;
            const item = state.cartItems.find( (i) => i.cartID === product.cartID)
            if(item){  // agr phle se h to amount increase kr do when add to cart pe click ho
                item.amount += product.amount
            }
            else{  // agar cartitems me ye product na ho to add kr do
                state.cartItems.push(product);
            }

            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;

            cartSlice.caseReducers.calculateTotals(state);

            toast.success("item added to cart");

        },
        clearItem : (state) => {
            localStorage.setItem('cart', JSON.stringify(defaultState));
            return defaultState;
        },
        removeItem : (state, action) => {
            const { cartID } = action.payload;
            const product = state.cartItems.find( (i) => i.cartID === cartID);
            state.cartItems = state.cartItems.filter( (i) => i.cartID !== cartID );

            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;

            cartSlice.caseReducers.calculateTotals(state);
            toast.error('item removed from cart');
        },
        editItem : (state, action) => {
            const { cartID, amount} = action.payload;
            const item = state.cartItems.find( (i) => i.cartID === cartID );

            //*
            state.numItemsInCart += amount - item.amount;  //! important to understand
            
            state.cartTotal += item.price * (amount - item.amount);
            
            item.amount = amount; // update bhi krna padega na 
            
            cartSlice.caseReducers.calculateTotals(state);
            
            toast.success("cart updated")
        },

        calculateTotals: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state));
        }
    }
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;