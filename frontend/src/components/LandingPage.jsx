import RestaurantList from "./RestaurantList";

import {Link } from 'react-router-dom';
const LandingPage = () => {
    return ( <div>
        <h1>Welcome to FoodApp</h1>
        <Link to="/add-restaurant">
           <button className="btn btn-success">Add a New Restaurant</button>
        </Link>
        <RestaurantList/>
    </div> );
}
 
export default LandingPage;