const getCartDataFromLocalStorage = () => {
    const getCartData = localStorage.getItem('cart');

    if (getCartData) {
        const storeCartData = JSON.parse(getCartData);
        return storeCartData;
    }
    return []
}


const addToCartToLocalStorage = (id) => {

    const storeCartIdData = getCartDataFromLocalStorage();
    const newCart = [...storeCartIdData, id];
    const cartToStringified = JSON.stringify(newCart);
     localStorage.setItem('cart',cartToStringified)

    
    
}



export { getCartDataFromLocalStorage, addToCartToLocalStorage };