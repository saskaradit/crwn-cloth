export const addItemToCart = (cartItems, item) =>{
  const existingCart = cartItems.find(cartItem => cartItem.id === item.id)

  if(existingCart){
    return cartItems.map(cartItem => cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem)
  }

  return[...cartItems,{...item,quantity:1}]
}

export const removeItemFromCart = (cartItems,removeItem)=>{
  const currentCart = cartItems.find(
    item => item.id === removeItem.id
  )
  if(currentCart.quantity===1){
    return cartItems.filter(item => item.id !== removeItem.id)
  }

  return cartItems.map(
    item => item.id === removeItem.id ? {...item, quantity: item.quantity-1} : item
  )
}