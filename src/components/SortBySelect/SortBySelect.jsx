import React from 'react';

class SortBySelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        };

    }

    render() {
        return(
            <div>
                <select className="btn btn-primary"
                        value = {this.state.selected}
                        onChange={this.props.handleChange}
                >
                    <option value="restaurant-name">Restaurant Name</option>
                    <option value="ave-price">Ave Price</option>
                </select>
            </div>
        );
    }

}

export default SortBySelect
