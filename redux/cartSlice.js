import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        products: [],
        itemsNumber: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
            state.itemsNumber += 1
            state.total += action.payload.price
        },
        reset: (state) => {
            state.products = []
            state.itemsNumber = 0
            state.total = 0
        }
    }
})

export const { addProduct, reset } = cartSlice.actions
export default cartSlice.reducer