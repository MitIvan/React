import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalQuantity: 0,
	},
	reducers: {
		addItemTCart(state, action) {
			const newItem = action.payload;
			const exitingItem = state.items.find(item => item.id === newItem.id);
			if(!exitingItem) {
				state.items.push({itemId: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title})
			} else {
				exitingItem.quantity++
				exitingItem.totalPrice = exitingItem.totalPrice + newItem.price
			}
		},
		removeItemFromCart() {}
	}
})
