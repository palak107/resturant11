


import React, { useState, useEffect } from 'react';

const Menuitem = (props) => {
  const { name, image, price, updateTotal,newCart,pay } = props;
  const [count, setCount] = useState(0); // Track the number of items added
  const [addedToCart, setAddedToCart] = useState(false); // Track if item has been added to the cart

  // Function to increase the item count
  function addItem() {
    setCount(count + 1);
    setAddedToCart(false);
  }

  // Function to decrease the item count (preventing negative count)
  function decreaseItem() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // Function to handle adding the item to the cart
  function handleAddToCart() {
    if (count > 0 && !addedToCart) { // Only add to cart if count > 0 and not already added
      updateTotal(price * count); // Add price * count to the total
      setAddedToCart(true); // Mark as added to the cart
      setCount(0);
    } else if (count === 0) {
      alert("Please add at least one item to the cart.");
    } else {
      alert("Item already added to cart.");
    }
  }

  // Reset addedToCart flag if the count goes back to 0
  useEffect(() => {
    if (count === 0) {
      setAddedToCart(false); // Reset flag if the item count is 0
    }
  }, [count]);
  

  return (
    <>
    <div className="menuitem">
      <img src={props.image} alt="food" />
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>

      <div>
        <button onClick={addItem}>Add Item</button>
        <button onClick={decreaseItem}>Remove Item</button>
        <p>Current quantity added: {count}</p>
      </div>

      <button onClick={handleAddToCart} >
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
    
    </>
  );
};

export default Menuitem;






