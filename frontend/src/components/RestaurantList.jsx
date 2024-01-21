import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect } from "react";
import { fetchRestaurants } from "../store/restaurantSlice";


const RestaurantList = () => {
    const { entities: restaurants, loading } = useSelector(state => state.restaurants);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (loading === 'idle') {
            dispatch(fetchRestaurants());
          }
    },[loading,dispatch])

    return ( 
        <>
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
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </>
     );
}
 
export default RestaurantList;