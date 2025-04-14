import React from 'react'
const ProgressBar = ({ subtotal, threshold }) => {
    const progress = Math.min((subtotal / threshold) * 100, 100);
    return (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
        <p>{subtotal < threshold
          ? `Add ₹${threshold - subtotal} more for a free gift`
          : " Free gift unlocked!"}
        </p>
      </div>
    );
  };
  
  export default ProgressBar;
  