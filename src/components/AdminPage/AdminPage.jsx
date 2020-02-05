import React, {Component} from "react";
import {Link} from "react-router-dom"
import RestaurantTable from "../RestaurantTable/RestaurantTable"
import { getRestaurants, deleteRestaurant } from '../../services/restaurantService';

class AdminPage extends Component {
  state = {
    restaurants: getRestaurants()
  }

  handleDelete = restaurantId => {
    deleteRestaurant(restaurantId)
    this.setState({ restaurants: getRestaurants() });
  };

  render(){
    const {restaurants} = this.state;
    return (
      <div data-testid="admin-page">
        <Link to="restaurants/new" className="btn btn-primary btn-sm">Create New</Link>
        <RestaurantTable restaurants={restaurants} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default AdminPage;
