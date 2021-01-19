import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) =>  cart.cartItems
)

export const selectCartDropdownHidden = createSelector(
    [selectCart],
    (cart) =>  cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQuantity, cartItem) => (accumulatedQuantity + cartItem.quantity), 0
    )
)