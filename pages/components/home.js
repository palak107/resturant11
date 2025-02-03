import React from 'react'
import Navbar from './navbar'
import { useState } from 'react';
const home = () => {
  const [orderStarted, setOrderStarted] = useState(false);

  // Function to handle the button click
  const startorder = () => {
    setOrderStarted(true);
  };
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  };
  return (
    <div className='back'>
      <Navbar></Navbar>
     <div >
        <div className="Message">
        <h2>{getGreeting()}</h2>
           <h2>Are you hungry</h2>

            <h1>
               DON'T WAIT! 
            </h1>

            <div  className='MessageInfo'> <h3>LETS START TO ORDER FOOD NOW</h3></div>
           
            <button className="cta-btn" onClick={startorder}>Start Ordering</button>

            {orderStarted && (
            <div className="order-started-message">
              <h2>Great! Let's take your order!</h2>
              <p>Proceed to the menu to explore and select your food items.</p>
            </div>
          )}
        </div>
        </div> 
    </div>
  )
}

export default home
