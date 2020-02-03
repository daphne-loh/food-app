import React from 'react';

class Restaurant extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            _id: this.props.restaurant._id,
            name: this.props.restaurant.name,
            openingTime: this.props.restaurant.openingTime,
            closingTime: this.props.restaurant.closingTime,
            cuisine: this.props.restaurant.cuisine,
            imageUrl: this.props.restaurant.imageUrl,
            averagePrice: this.props.restaurant.averagePrice
        };

        console.log(this.props.restaurant.name);
    }

    render() {
        return(
            <div className="card">
                <img className="card-img-top" src={this.state.imageUrl} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.name}</h5>
                    <p className="card-text">{this.state.cuisine.name}</p>
                    <p className="card-text">{this.state.openingTime} - {this.state.closingTime}</p>
                    <a href="#" className="btn btn-primary">Order</a>
                </div>
            </div>

        );
    }
}

export default Restaurant
