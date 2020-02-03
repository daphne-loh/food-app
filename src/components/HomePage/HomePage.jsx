import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";

class HomePage extends Component {
  constructor (props) {
    super(props);

    this.restaurants = getRestaurants();

  this.state = {
    shownRestaurants: this.restaurants,
    selectedCuisine: null,
  };

  this.updateCuisine = this.updateCuisine.bind(this);
}

  updateCuisine(listItem){
    this.setState({selectedCuisine:listItem});
    console.log('selectedCuisine:', this.state.selectedCuisine);
    let updateRestaurants;

    if (listItem !== "All") {
      console.log('entered')
      updateRestaurants = this.restaurants.filter(restaurant=> listItem === restaurant.cuisine.name);
    }
    else {
      updateRestaurants = this.restaurants;
    }


    this.setState({shownRestaurants: updateRestaurants});
    console.log(this.state.shownRestaurants)
  }


  render() {
    return (
      <div className="container-fluid">
        <FilterBar updateCuisine={this.updateCuisine} />
        <div className="row">
          {this.state.shownRestaurants.map(restaurant => (
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex" key={restaurant._id}>
              <Restaurant details={restaurant} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
