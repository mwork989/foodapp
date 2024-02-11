// src/components/AddRestaurantForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../store/restautantSlice";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import {Link } from 'react-router-dom';

const AddRestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    cuisine: [],
    costForTwo: "",
    items: [],
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "cuisine") {
      // For cuisine, split the string by commas to create an array
      setFormData({
        ...formData,
        cuisine: e.target.value.split(",").map((s) => s.trim()),
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleItemChange = (e, index) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [e.target.name]: e.target.value };
    setFormData({ ...formData, items: newItems });
  };

  const addItemField = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { name: "", description: "", price: "", image: "", rating: 0 },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRestaurant(formData));
  };

  return (
    <>
      <Link to="/">
        <button>Back to Home</button>
      </Link>{" "}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter restaurant name"
          />
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </Form.Group>

        <Form.Group controlId="formCuisine">
          <Form.Label>Cuisine</Form.Label>
          <Form.Control
            type="text"
            name="cuisine"
            value={formData.cuisine.join(", ")}
            onChange={handleChange}
            placeholder="Enter cuisines separated by commas"
          />
        </Form.Group>

        <Form.Group controlId="formCostForTwo">
          <Form.Label>Cost for Two</Form.Label>
          <Form.Control
            type="number"
            name="costForTwo"
            value={formData.costForTwo}
            onChange={handleChange}
            placeholder="Enter cost for two"
          />
        </Form.Group>

        <h5>Menu Items</h5>
        {formData.items.map((item, index) => (
          <div key={index}>
            <InputGroup className="mb-3">
              <FormControl
                name="name"
                placeholder="Item name"
                value={item.name}
                onChange={(e) => handleItemChange(e, index)}
              />
              <FormControl
                name="description"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleItemChange(e, index)}
              />
              <FormControl
                name="price"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleItemChange(e, index)}
              />
              <FormControl
                name="image"
                placeholder="Image URL"
                value={item.image}
                onChange={(e) => handleItemChange(e, index)}
              />
              <FormControl
                name="rating"
                placeholder="Rating"
                value={item.rating}
                onChange={(e) => handleItemChange(e, index)}
              />
            </InputGroup>
          </div>
        ))}
        <Button variant="secondary" onClick={addItemField}>
          Add Menu Item
        </Button>

        <Button variant="primary" type="submit" className="mt-3">
          Add Restaurant
        </Button>
      </Form>
    </>
  );
};

export default AddRestaurantForm;
