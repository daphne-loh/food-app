import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import Restaurant from "../Restaurant/Restaurant";
import FilterBar from "../FilterBar/FilterBar";
import SortBySelect from "../SortBySelect/SortBySelect";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: [getDefaultCuisine(), ...getCuisines()],
    selectedCuisine: null,
    selectedDropdown: ""
  };

  handleCuisineSelect = cuisine => {
    const finalCuisine = cuisine.name === "All" ? null : cuisine;
    this.setState({
      selectedCuisine: finalCuisine
    });
  };

   handleChange = async selection => {
      await this.setState({
       selectedDropdown:selection.target.value
     });

  }

  render() {
    const { restaurants, cuisines, selectedCuisine } = this.state;
    let filteredRestaurantList =
      selectedCuisine && selectedCuisine._id
        ? restaurants.filter(res => res.cuisine._id === selectedCuisine._id)
        : restaurants;

    if (this.state.selectedDropdown === 'ave-price') {
        // sort by value
        filteredRestaurantList.sort(function (a, b) {
            return a.averagePrice - b.averagePrice;
        });
    }
        else if (this.state.selectedDropdown === 'restaurant-name') {
        // sort by name
        filteredRestaurantList.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });

        }




    return (
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto mt-3">
            <FilterBar
              cuisines={cuisines}
              selected={selectedCuisine}
              handleClick={this.handleCuisineSelect}
            />
          </div>
          <SortBySelect handleChange={this.handleChange}/>
        </div>

        <div className="row">
          {filteredRestaurantList.map(restaurant => (
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
