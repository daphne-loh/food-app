import React from 'react';
import AdminPage from "../AdminPage/AdminPage";
import Input from "../common/Input/Input";
import SelectInput from "../common/SelectInput/SelectInput";
import {getCuisines} from "../../services/cuisineService";
import {saveMenuItem} from "../../services/menuItemService";


class RestaurantForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cuisines: getCuisines(),
            formValues: {
                name: "",
                address: "",
                openingTime: "",
                closingTime: "",
                cuisine: "",
                imageUrl: "",
                averagePrice: "",
            },
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit() {
        saveMenuItem();
    }

    handleChange(e) {
        let stateName = e.currentTarget.name;
        const formValues = this.state.formValues;
        formValues[stateName]= e.currentTarget.value;
        this.setState({formValues});
        console.log(this.state.formValues);
    };

    render() {
        return(
            <div>
                <h1>Restaurant Form</h1>

                <form onSubmit={this.handleSubmit}>
                    <Input name="name" label="Name" type="text" handleChange={this.handleChange}/>

                    <Input name="address" label="Address" type="text" handleChange={this.handleChange}/>

                    <Input name="openingTime" label="Opening Time" type="text" handleChange={this.handleChange}/>

                    <Input name="closingTime" label="Closing Time" type="text" handleChange={this.handleChange}/>

                    <SelectInput cuisines={this.state.cuisines}/>

                    <Input name="averagePrice" label="Average Price" type="number"/>

                    <Input name="imageUrl" label="Image URL" type="text"/>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default RestaurantForm
