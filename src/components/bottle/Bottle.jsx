import React from "react";
import "./bottle.css";

function Bottle({ bottle, handleAddToCart }) {
  const { name, img, seller, price, stock, ratings } = bottle;

  return (
    <div className="bottle-card">
      <img src={img} alt={name} />

      <div className="bottle-info">
        <h3>{name}</h3>

        {/* এই ডিভটি ডাটাগুলোকে পাশাপাশি সাজাতে সাহায্য করবে */}
        <div className="info-grid">
          <p>
            <strong>Seller:</strong> {seller}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Stock:</strong> {stock} left
          </p>
          <p>
            <strong>Rating:</strong> {ratings} ★
          </p>
        </div>
      </div>

      <button onClick={() => handleAddToCart(bottle)} className="success-btn">
        Buy Now
      </button>
    </div>
  );
}

export default Bottle;
