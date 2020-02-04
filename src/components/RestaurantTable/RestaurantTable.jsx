import React from 'react';


function RestaurantTable(props) {

    console.log('from restaurantTable',props.restaurantList);

    const restaurants = props.restaurantList.map(restaurant=>{
        return (
            <tr>
                <td>{restaurant.name}</td>
                <td>{restaurant.address}</td>
                <td>{restaurant.openingTime}AM - {restaurant.closingTime}PM</td>
                <td>{restaurant.cuisine.name}</td>
                <td>{restaurant.averagePrice}</td>
                <button type="button" className="btn btn-danger" onClick={()=>props.handleClick(restaurant._id)}>Delete</button>
            </tr>
        );
    });

    return(
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Opening Hours</th>
                <th scope="col">Cuisine</th>
                <th scope="col">Average Price</th>
            </tr>
            </thead>
            <tbody>
                {restaurants}
            </tbody>
        </table>
    );
}

export default RestaurantTable
