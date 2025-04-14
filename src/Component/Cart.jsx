import React from 'react'

const Cart = ({ items, updateQuantity, removeItem }) => {
    return (
        <>
            <h3 className='h3-cart'>Cart Items</h3>
            <div className="cart">
                {items.length === 0 && <div className='empty'><span>Your cart is empty.</span><span> Add some product to see them here.</span></div>}
                {items.map(item => (
                <div className="cart-item" key={item.id}>
                    <div>
                <div>
                <span>{item.name}</span>
                </div>
                    <div>
                    <span>₹{item.price} x {item.quantity}</span>
                    </div>
                    </div>
                    <div className='add-minus'>
                    {!item.isGift && (
                        <>
                       <button
                    className="minus"
                    onClick={() => {if (item.quantity === 1) {removeItem(item.id);} else {updateQuantity(item.id, item.quantity - 1);}}} >-</button>
                        <span>{item.quantity}</span>
                        <button className="plus" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </>
                    )}
                    </div>
                </div>
                ))}
            </div>
        </>
    );
  };
  
  export default Cart;
  