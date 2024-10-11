import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        items: []
    },

    reducers: {

        addItem: (state, action) => {

            const itemId = action.payload.card.info.id
            const existingItem = state.items.find((item) => item.card.info.id === itemId)

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },

        removeItem: (state, action) => {

            const itemId = action.payload.card.info.id
            const existingItem = state.items.find((item) => item.card.info.id === itemId)

            if (existingItem) {
                existingItem.quantity -= 1
            }
            if (existingItem.quantity === 0) {
                //if true the item is kept in items array 
                //if false the item is removed from array
                state.items = state.items.filter((item) => item.card.info.id !== itemId)
            }

        },


        clearCart: (state, action) => {
            state.items.length = 0
        }
    }
})

export const { addItem, removeItem, clearCart } = CartSlice.actions

export default CartSlice.reducer;