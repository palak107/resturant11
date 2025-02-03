import React, { useState } from 'react';

const Card = ({ className, description, date, time }) => {
  const [signUpFormVisible, setSignUpFormVisible] = useState(false);
  const [sign, setSign] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Toggle form visibility on double click
  const handleSignUp = () => {
    setSignUpFormVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email });
    setSign(true);
  };

  return (
    <div className="card">
      <h2>{className}</h2>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>

      <button onDoubleClick={handleSignUp} disabled={sign}>
        {sign ? 'Signed Up!' : 'Sign Up'}
      </button>

      {signUpFormVisible && !sign && (
        <div className="sign-up-form">
          <h3>Sign Up for {className}</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Card;
