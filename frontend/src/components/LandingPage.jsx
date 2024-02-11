// src/components/LandingPage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRestaurants } from "../store/restautantSlice";
import RestaurantList from "./RestaurantList";
import { Typeahead } from "react-bootstrap-typeahead";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
  Dropdown,
  Form,
} from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const {
    entities: restaurants,
    loading,
    error,
  } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const [location, selectedLocation] = useState("");
  const filteredRestaurants  = selectedLocation ? restaurants.filter(restaurant=>restaurant.location === location):[];

  const onSelectedCity = (city) =>{
    selectedLocation(city)
  }
 

  return (
    <Container fluid>
      <Row className="justify-content-md-center  banner-class">
        <Col md={8} className="text-center">
          <section className="banner-logo">
            <span className="banner-logo-text">e!</span>
          </section>
          <h1>Find the best restaurants, cafés, and bars</h1>
          {/* <Link to="/add-restaurant">
                <Button variant="primary">Add New Restaurant</Button>
              </Link> */}
          <Container>
            <Row className="mb-2">
              <Form.Group as={Col} controlId="location">
                <Form.Select defaultValue="Select City" onChange={(event)=> onSelectedCity(event.target.value)}>
                  {restaurants.map((restaurant) => (
                    <option key={restaurant._id} value={restaurant.location}>
                      {restaurant.location}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="restaurants">
              
                <Typeahead
                  id="location-typeahead"
                  labelKey="name"
                
                  options={filteredRestaurants}
                  placeholder="Choose a location..."
             
                />
              </Form.Group>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row className="mt-4">
        {loading === "loading" ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <RestaurantList restaurants={restaurants} />
        )}
      </Row>
    </Container>
  );
};

export default LandingPage;
