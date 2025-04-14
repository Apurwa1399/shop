import React from 'react'

const Cart = ({ items, updateQuantity }) => {
    return (
      <div className="cart">
        {items.length === 0 && <p>No items added.</p>}
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
                  <button className="minus" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="plus" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cart;
  