import React from 'react';
import { getCuisines } from '../../services/restaurantService'

class FilterBar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            cuisines: getCuisines(),
            selectedCuisine: null
        };
    }

    async updateCuisine(listItem) {
        await this.setState({selectedCuisine:listItem});
        this.props.updateCuisine(this.state.selectedCuisine);
    }

    render() {
        return(

            <div className="btn-group" role="group" aria-label="Basic example">
                {this.state.cuisines.map(listItem => (
                    <button type="button" className="btn btn-secondary" onClick={()=> this.updateCuisine(listItem)}>{listItem}</button>
                ))}
            </div>

        );
    }

}

export default FilterBar
