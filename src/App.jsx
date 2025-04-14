import { useState, useEffect } from 'react';
import { PRODUCTS, FREE_GIFT, THRESHOLD } from './assets/constants';
import ProductList from './Component/ProductList';
import Cart from './Component/Cart';
import ProgressBar from './Component/ProgressBar';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [giftAdded, setGiftAdded] = useState(false);

  const subtotal = cartItems
    .filter(item => !item.isGift)
    .reduce((acc, item) => acc + item.price * item.quantity, 0);
  useEffect(() => {
    const giftInCart = cartItems.find(item => item.id === FREE_GIFT.id);
    if (subtotal >= THRESHOLD && !giftInCart) {
      setCartItems(prev => [...prev, { ...FREE_GIFT, quantity: 1 }]);
      setGiftAdded(true);
    } else if (subtotal < THRESHOLD && giftInCart) {
      setCartItems(prev => prev.filter(item => item.id !== FREE_GIFT.id));
      setGiftAdded(false);
    }
  }, [subtotal]);

  const addToCart = (product) => {
    const qty = productQuantities[product.id] || 1;
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const updateQuantity = (productId, qty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <ProductList
        products={PRODUCTS}
        productQuantities={productQuantities}
        setProductQuantities={setProductQuantities}
        addToCart={addToCart}
      />
      
      <ProgressBar subtotal={subtotal} threshold={THRESHOLD} />
      {giftAdded && <p className="gift-message"> You’ve unlocked a free gift!</p>}
      <Cart
        items={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
