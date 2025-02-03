
import React, { useState } from 'react';
import Navbar from "./components/navbar";  // Import Navbar component
import MenuItem from "./components/Menuitem";  // Import MenuItem component

const Page = () => {
  const [category, setCategory] = useState('Burger');  // Track selected category
  const [total, setTotal] = useState(0);  // Track total price
  const [cart, setCart] = useState([]);  // Track items in the cart

  // Add item to cart and update total
  const addToCart = (item, quantity) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      // If item exists, update its quantity
      setCart(cart.map(cartItem =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      ));
    } else {
      // If item doesn't exist, add it to the cart
      setCart([...cart, { ...item, quantity }]);
    }
    setTotal(total + item.price * quantity);  // Update the total price
  };

  // Handle category change
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Reset the cart
  const newCart = () => {
    setCart([]);
    setTotal(0);
  };

  // Handle payment
  const pay = () => {
    alert(`Proceeding to payment with a total of $${total.toFixed(2)}`);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side: Menu */}
      <div style={{ flex: 3, padding: '20px' }}>
        <div>
          <Navbar /> {/* Display the Navbar */}
        </div>
        <h2 style={{ textAlign: 'center', marginTop: "40px", fontFamily: "cursive" }}>Menu</h2>

        {/* Category buttons */}
        <div className="category-buttons" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button onClick={() => handleCategoryChange('Burger')}>Burger</button>
          <button onClick={() => handleCategoryChange('Pizza')}>Pizza</button>
          <button onClick={() => handleCategoryChange('Shakes')}>Shakes</button>
        </div>

        {/* Display menu items based on the selected category */}
        <div className="menu">
          {category === 'Burger' && (
            <>
              <MenuItem
                id={1}
                image="/burger.webp"
                name="Beef Burger"
                description="A delicious beef burger with all the toppings!"
                price={10}
                addToCart={addToCart}
              />
              <MenuItem
                id={2}
                image="/masala burger.webp"
                name="Veg Burger"
                description="A tasty veggie burger with fresh ingredients!"
                price={10}
                addToCart={addToCart}
              />
              <MenuItem
                id={3}
                image="/last.webp"
                name="Crunchy Burger"
                description="A crunchy, crispy burger to satisfy your cravings!"
                price={10}
                addToCart={addToCart}
              />
            </>
          )}

          {category === 'Pizza' && (
            <>
              <MenuItem
                id={4}
                image="/pixxa.jpg"
                name="Classic Pizza"
                description="A classic pizza with mozzarella and pepperoni!"
                price={22}
                addToCart={addToCart}
              />
              <MenuItem
                id={5}
                image="/veg.jpg"
                name="Veg Pizza"
                description="A healthy pizza with fresh vegetables!"
                price={25}
                addToCart={addToCart}
              />
              <MenuItem
                id={6}
                image="/mushroom.jpg"
                name="Mushroom Pizza"
                description="A savory pizza with mushrooms and cheese!"
                price={21}
                addToCart={addToCart}
              />
            </>
          )}

          {category === 'Shakes' && (
            <>
              <MenuItem
                id={7}
                image="/shakes.jpg"
                name="Chilled Shakes"
                description="A refreshing chilled shake to cool you down!"
                price={10}
                addToCart={addToCart}
              />
              <MenuItem
                id={8}
                image="/straw.jpg"
                name="Strawberry Shakes"
                description="A creamy strawberry shake with a delightful taste!"
                price={10}
                addToCart={addToCart}
              />
              <MenuItem
                id={9}
                image="/chocolate.jpg"
                name="Chocolate Shakes"
                description="A rich chocolate shake to satisfy your sweet tooth!"
                price={10}
                addToCart={addToCart}
              />
            </>
          )}
        </div>
      </div>

      {/* Right Side: Cart (Conditional Rendering) */}
      {cart.length > 0 && (
        <div style={{ flex: 1, padding: '50px', borderLeft: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
          <h3>Your Cart</h3>
          <div>
            {cart.map(item => (
              <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p>{item.name} x{item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div style={{ marginTop: "10px", fontWeight: "bold" }}>
              <p>Total: ${total.toFixed(2)}</p>
            </div>
            <button onClick={newCart} style={{ backgroundColor: 'red', color: 'white', padding: '10px', marginRight: '10px' }}>Reset Cart</button>
            <button onClick={pay} style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>Pay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;