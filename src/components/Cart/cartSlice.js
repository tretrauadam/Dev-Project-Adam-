import { createSlice } from '@reduxjs/toolkit';
import products from '../../Home';

export const cartSlice = createSlice({
    name: 'cart', 
    initialState: {
        products: products,
        currentCarts: [],
        totalItems: 0,
        totalPrice: 0,
        display: 'hidden'
    },

    reducers: {
        addToCart: (state, action) => {
            state.currentCart.push(action.payload)
            state.totalItems += 1
        },
        addQuantity: (state, action) => {
            let item = state.currentCart.find(item => item.product.id === action.payload)
            let newCart = state.currentCart.filter(item => item.product.id !== action.payload)

            item.quantity += 1
            newCart.push(item)
            state.currentCart = newCart
        },
        increaseCartQuantity: (state, action) => {
            let newState = state.currentCart.map(item => {
                if (item.product.id === action.payload) {
                    item.quantity += 1
                }
                return item
            })
            state.currentCart = newState 
            state.totalItems += 1
        },
        substractCartQuantity: (state, action) => {
            let newCart = state.currentCart.map(item => {
                if(item.product.id === action.payload){
                    item.quantity -= 1
                }
                return item 
            })
            state.currentCart = newCart.filter(item => item.quantity !== 0)
            state.totalItems -= 1
        },
        addToTotal: (state, action) => {
            state.totalPrice += action.payload
        }, 
        substractFromTotal: (state, action) => {
            state.totalPrice -= action.payload
        },
        displayCart: (state) => {
            state.display = null 
        },
        
        hideCart: (state) => {

            state.display = 'hidden'
        },
    }
})

export const {hideCart, displayCart, substractCartQuantity, substractFromTotal, addQuantity, addToCart, addToTotal,increaseCartQuantity} = cartSlice.actions

export default cartSlice.reducer