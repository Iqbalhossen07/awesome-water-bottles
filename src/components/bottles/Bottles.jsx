import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css"; // CSS ইম্পোর্ট করতে ভুলবেন না
import { addToCartToLocalStorage, getCartDataFromLocalStorage } from "../../utils/localStorage";

function Bottles({ bottlesPromise }) {
  const [cart, setCart] = useState([]);
  const bottlesData = use(bottlesPromise);

  useEffect(() => {
    const storedIds = getCartDataFromLocalStorage();
    if (storedIds) {
      const saveCart = [];
      for (const id of storedIds) {
        console.log(id);
        const cartDataFind = bottlesData.find((cart) => cart.id === id);
        saveCart.push(cartDataFind);

        // console.log(cartDataFind);
      }
          setCart(saveCart);
    }


  }, [bottlesData]);


  
  const handleAddToCart = (bottle) => {
    const newBottle = [...cart, bottle];
    setCart(newBottle);
    addToCartToLocalStorage(bottle.id);
  };

  return (
    <div>
      <h1>Buy Awesome Water Bottles</h1>
      <h2>Cart: {cart.length}</h2>
      <div className="bottles-container">
        {bottlesData.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}

export default Bottles;
