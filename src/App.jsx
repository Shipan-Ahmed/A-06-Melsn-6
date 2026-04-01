
import { useState } from 'react';
import './App.css'
import Banner from './Components/Banner';
import MainSection from './Components/MainSection';
import Navbar from './Components/Navbar';
import Rating from './Components/Rating';
import Steps from './Components/Steps';
import Pricing from './Components/Pricing';

function App() {

   const [cartItems, setCartItems] = useState([]);

   const handleAddToCart = (product) => {
     // Prevent duplicates
     if (!cartItems.find((item) => item.id === product.id)) {
       setCartItems((prev) => [...prev, product]);
     }
   };

   const handleRemove = (id) => {
     setCartItems((prev) => prev.filter((item) => item.id !== id));
   };

   const handleCheckout = () => {
     setCartItems([]);
   };
  

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartItems.length}></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <MainSection
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      ></MainSection>
      <Steps></Steps>
      <Pricing></Pricing>

    </div>
  );
}

export default App
