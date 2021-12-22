import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../styles/Layout.css';
import React, { useState } from 'react';

function App() {
  const [cart, updateCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('')
  return (
    <div>
      <Banner />
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>
      <Footer />
    </div>
  )
}

export default App;
