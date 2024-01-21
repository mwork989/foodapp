
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AddRestaurantPage from './components/AddRestaurantPage';

const App = () => {
  return ( 
    <Router>
      <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/add-restaurant" element={<AddRestaurantPage />} />
      </Routes>
    </Router>
   );
}
 
export default App;

