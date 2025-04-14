import React from 'react'
const ProgressBar = ({ subtotal, threshold }) => {
    const progress = Math.min((subtotal / threshold) * 100, 100);
    return (
    <>
        <h3>Cart Summary</h3>
        <div className='cart-summary'>
            <div className='subtotal'>
                <div><p>Subtotal:</p></div>
                <div><b>₹{subtotal}</b></div>
            </div>
           <div className="bg-blue">
           <p>Add product worth ₹1000 to get free wireless mouse</p>
            <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
                <p>{subtotal < threshold
                     ? `Add ₹${threshold - subtotal} more for a free gift`
                    : " Free gift unlocked!"}
                 </p>
            </div>
           </div>
        </div>
    </>
    );
  };
  
  export default ProgressBar;
  