import React from "react";
import RestaurantTable from "../RestaurantTable/RestaurantTable";
import {deleteRestaurant, getRestaurants} from "../../services/restaurantService";

class AdminPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            restaurant: getRestaurants(),
        };

        this.handleClick = this.handleClick.bind(this);
    }



    handleClick(id) {
        deleteRestaurant(id);
        this.setState({restaurant: getRestaurants()})
    }

    render() {
        return (
            <div data-testid="admin-page">
            <h1>Admin Page</h1>

            <RestaurantTable restaurantList={this.state.restaurant} handleClick={this.handleClick}/>
            </div>
        );
    }
}



export default AdminPage;
