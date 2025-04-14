import React from 'react'

const Cart = ({ items, updateQuantity, removeItem }) => {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        {items.length === 0 && <p>No items added.</p>}
        {items.map(item => (
          <div className="cart-item" key={item.id}>
            <span>{item.name}</span>
            <div>
              {!item.isGift && (
                <>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </>
              )}
            </div>
            <span>₹{item.price * item.quantity}</span>
            {!item.isGift && <button onClick={() => removeItem(item.id)}>X</button>}
          </div>
        ))}
      </div>
    );
  };
  
  export default Cart;
  