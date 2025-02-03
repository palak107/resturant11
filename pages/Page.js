
import React, { useState } from 'react';
import Navbar from "./components/navbar";  // Import Navbar component
import MenuItem from "./components/Menuitem";  // Import MenuItem component

const Page = () => {
  const [category, setCategory] = useState('Burger');  // Track selected category
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  // Add item to cart and update total
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // If item exists, update its quantity
      setCart(cart.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      // If item doesn't exist, add it to the cart
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setTotal(prevTotal => prevTotal + item.price);  // Update the total price
  };

  // Handle category change
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const newCart = () => {
    setCart([]);
    setTotal(0);
  };

  const pay = () => {
    alert(`Proceeding to payment with a total of $${total.toFixed(2)}`);
  };

  return (
    <div>
      <div>
        <Navbar /> {/* Display the Navbar */}
      </div>
      <h2 style={{ textAlign: 'center', marginTop: "40px", fontFamily: "cursive" }}>Menu</h2>

      {/* Category buttons */}
      <div className="category-buttons">
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
              className="Beef Burger"
              description="A delicious beef burger with all the toppings!"
              price={10}
              updateTotal={() => addToCart({ id: 1, name: "Beef Burger", price: 10, description: "A delicious beef burger with all the toppings!" })}
              newCart={newCart}
              pay={pay}
            />
            <MenuItem
              id={2}
              image="/masala burger.webp"
              className="Veg Burger"
              description="A tasty veggie burger with fresh ingredients!"
              price={10}
              updateTotal={() => addToCart({ id: 2, name: "Veg Burger", price: 10, description: "A tasty veggie burger with fresh ingredients!" })}
              newCart={newCart}
              pay={pay}
            />
            <MenuItem
              id={3}
              image="/last.webp"
              className="Crunchy Burger"
              description="A crunchy, crispy burger to satisfy your cravings!"
              price={10}
              updateTotal={() => addToCart({ id: 3, name: "Crunchy Burger", price: 10, description: "A crunchy, crispy burger to satisfy your cravings!" })}
              newCart={newCart}
              pay={pay}
            />
          </>
        )}

        {category === 'Pizza' && (
          <>
            <MenuItem
              id={4}
              image="/pixxa.jpg"
              className="Classic Pizza"
              description="A classic pizza with mozzarella and pepperoni!"
              price={22}
              updateTotal={() => addToCart({ id: 4, name: "Classic Pizza", price: 22, description: "A classic pizza with mozzarella and pepperoni!" })}
              newCart={newCart}
              pay={pay}
            />
            <MenuItem
              id={5}
              image="/veg.jpg"
              className="Veg Pizza"
              description="A healthy pizza with fresh vegetables!"
              price={25}
              updateTotal={() => addToCart({ id: 5, name: "Veg Pizza", price: 25, description: "A healthy pizza with fresh vegetables!" })}
              newCart={newCart}
              pay={pay}
            />
            <MenuItem
              id={6}
              image="/mushroom.jpg"
              className="Mushroom Pizza"
              description="A savory pizza with mushrooms and cheese!"
              price={21}
              updateTotal={() => addToCart({ id: 6, name: "Mushroom Pizza", price: 21, description: "A savory pizza with mushrooms and cheese!" })}
              newCart={newCart}
              pay={pay}
            />
          </>
        )}

        {category === 'Shakes' && (
          <>
            <MenuItem
              id={7}
              image="/shakes.jpg"
              className="Chilled Shakes"
              description="A refreshing chilled shake to cool you down!"
              price={10}
              updateTotal={() => addToCart({ id: 7, name: "Chilled Shakes", price: 10, description: "A refreshing chilled shake to cool you down!" })}
              newCart={newCart}
              pay={pay}
            />
            <MenuItem
              id={8}
              image="/straw.jpg"
              className="Strawberry Shakes"
              description="A creamy strawberry shake with a delightful taste!"
              price={10}
              updateTotal={() => addToCart({ id: 8, name: "Strawberry Shakes", price: 10, description: "A creamy strawberry shake with a delightful taste!" })}
              newCart={newCart}
              pay={pay}
            />
            <MenuItem
              id={9}
              image="/chocolate.jpg"
              className="Chocolate Shakes"
              description="A rich chocolate shake to satisfy your sweet tooth!"
              price={10}
              updateTotal={() => addToCart({ id: 9, name: "Chocolate Shakes", price: 10, description: "A rich chocolate shake to satisfy your sweet tooth!" })}
              newCart={newCart}
              pay={pay}
            />
          </>
        )}
      </div>

      {/* Display Cart Items and Total Price */}
      <div className="cart" style={{ marginTop: "20px" }}>
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p>{item.name} x{item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div style={{ marginTop: "10px", fontWeight: "bold" }}>
              <p>Total: ${total.toFixed(2)}</p>
            </div>
            <button onClick={newCart} style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>Reset Cart</button>
            <button onClick={pay} style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>Pay</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
