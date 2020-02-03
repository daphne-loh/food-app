import React from 'react'
import {getRestaurants} from '../../services/restaurantService.js'
import Restaurant from "../Restaurant/Restaurant";

class HomePage extends React.Component {

    constructor (props) {

        super (props);
        this.state = {
            listOfRestaurants: getRestaurants()
        };

        console.log(this.state.listOfRestaurants);
    }

    render() {
        return(
        <div>
            {this.state.listOfRestaurants.map(restaurant => <Restaurant restaurant={restaurant}/>)}
        </div>
        );
    }
}

export default HomePage
