// src/components/RestaurantList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

const RestaurantList = () => {
  const restaurants = useSelector(state => state.restaurants.entities);

  return (
    <Row>
      {restaurants.map(restaurant => (
        <Col key={restaurant._id} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={restaurant.items[0]?.image || 'placeholder-image-url'} />
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>
                {restaurant.location} - {restaurant.cuisine.join(', ')}
              </Card.Text>
              <Link to={`/restaurants/${restaurant._id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default RestaurantList;
