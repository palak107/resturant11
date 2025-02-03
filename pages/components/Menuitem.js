

import React, { useState } from 'react';

const Menuitem = (props) => {
  const { name, image, price, addToCart } = props;
  const [count, setCount] = useState(0); // Track the number of items added

  // Function to increase the item count
  function addItem() {
    setCount(count + 1);
  }

  // Function to decrease the item count (preventing negative count)
  function decreaseItem() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // Function to handle adding the item to the cart
  function handleAddToCart() {
    if (count > 0) {
      addToCart({ name, price }, count); // Pass the item and quantity to addToCart
      setCount(0); // Reset the count after adding to cart
    } else {
      alert("Please add at least one item to the cart.");
    }
  }

  return (
    <div className="menuitem">
      <img src={image} alt="food" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>

      <div>
        <button onClick={addItem}>Add Item</button>
        <button onClick={decreaseItem}>Remove Item</button>
        <p>Current quantity added: {count}</p>
      </div>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Menuitem;