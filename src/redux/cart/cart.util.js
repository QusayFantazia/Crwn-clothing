export const addItemToCart = (cartItems, itemToAdd) => {
    const itemExist = cartItems.find(item => item.id === itemToAdd.id)
    if (itemExist) {
        return cartItems.map(item =>
            item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        )
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemToCart = (cartItems, itemToRemove) => {

    const foundItem = cartItems.find(item => item.id == itemToRemove.id)

    if (foundItem.quantity == 1) {
        return cartItems.filter(item => item.id !== foundItem.id)
    }
    else {
        return cartItems.map(item => item.id == foundItem.id ? { ...item, quantity: item.quantity - 1 } : item)
    }
}
//debug this when having item why does it have to be ... item