// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

// import './reset.css'
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantList from './Components/RestaurantList';
import RestaurantDetail from './Components/RestaurantDetail';
import LandingPage from './Components/LandingPage';
import AddRestaurantForm from './Components/AddRestaurantForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-restaurant" element={<AddRestaurantForm />} />
        <Route path="/restaurants/:restaurantId" element={<RestaurantDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
