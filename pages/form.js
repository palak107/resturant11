
import React, { use, useState } from 'react';
import Navtik from './components/navbar'
const Form = () => {
  // State for form fields
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [date, setDate] = useState('');
const [person,setPerson]=useState('');
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior (page reload)

    if (!firstname || !lastname || !date) {
      alert('Please fill in all fields');
    } else {
      alert(`Form submitted by ${firstname}, ${lastname} on date: ${date}`);
      // Reset form after successful submission
      setFirstname('');
      setLastname('');
      setDate('');
      setPerson('');
    }
  };

  return (
<>
<div><Navtik style={{color:"red"}}></Navtik></div>

    <div className="myform">
    
        <div className='formInfo'>
      <form onSubmit={handleSubmit}>
        <div class='thisform'>
          <div>
          <h1>book the table now</h1>
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}  // Update state on change
            />
          </div>
          
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}  // Update state on change
            />
          </div>
          
          <div>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}  // Update state on change
            />
            <label htmlFor='number'>person</label>
            <input
            id="number"
            type="number"
            value={person}
            onChange={(e) => setPerson(e.target.value)}></input>

          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div></div>
    </>
      
  );
};

export default Form;

