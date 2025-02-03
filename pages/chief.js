import React from 'react';
import Card from './components/card';
import Nav from "./components/navbar";
import { useState } from 'react';
const Chief = ( ) => {
 
  const  currenDate =new Date().toISOString().split('T')[0];
  return (
    <div className="cookingClass">
<div className='newnav'><Nav></Nav></div>
      <h1 style={ {textAlign:"center"}}>Classes Coming Up</h1>
      <div className="class-card">
        
   
          <Card
           className= 'Italian Pasta Masterclass'
               description= 'Learn how to make authentic Italian pasta with our chef!'
               date= 'February 15, 2025'
               time= '5:00 PM'
          
        ></Card>
          <Card
      className= 'Sushi Making Workshop'
      description='Join us to learn the art of sushi making from scratch!'
      date= 'February 22, 2025'
      time= '11:00 AM'></Card>
          <Card  className= " Pastry Baking Class" description='Master the art of making delicious pastries and desserts!' date= 'March 5, 2025' time= '2:00 PM'
         ></Card>
      </div>
    </div>
  );
};

export default Chief;
