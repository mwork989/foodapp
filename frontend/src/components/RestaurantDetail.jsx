// src/components/RestaurantDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// ... import Bootstrap components as needed

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector(state =>
    state.restaurants.entities.find(r => r._id === restaurantId)
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <h2>{restaurant.name}</h2>
      {/* Display other restaurant details */}
    </div>
  );
};

export default RestaurantDetails;
