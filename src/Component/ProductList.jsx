import React from 'react'

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products.map(product => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
