// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Card from './components/card';
// import signup from './components/signup'
// const signup = () => {
//   return (
//     <Router> {/* Wrap the whole app in Router */}
//       <Routes>
//         {/* Route for the homepage with the Card component */}
//         <Route 
//           path="/" 
//           element={
//             <Card 
//               className="Sample Class" 
//               description="Class description" 
//               date="2025-02-01" 
//               time="10:00 AM" 
//             />} 
//         />
        
//         {/* Route for the SignUpPage */}
//         <Route path="/signup" element={<SignUpPage />} />
//       </Routes>
//     </Router>
//   )
// }

// export default signup
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/card';
import SignUpPage from './components/signup'; // Make sure you import your signup page

// Main App component with routing
const App = () => {
  return (
    <Router> {/* Wrap the whole application in Router */}
      <Routes>
        {/* Route for the homepage with the Card component */}
        <Route 
          path="/" 
          element={
            <Card 
              className="Sample Class" 
              description="Class description" 
              date="2025-02-01" 
              time="10:00 AM" 
            />} 
        />
        
        {/* Route for the SignUpPage */}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
