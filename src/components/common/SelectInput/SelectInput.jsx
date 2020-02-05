import React from 'react'

function SelectInput(props) {

    console.log(props.cuisines);

    return (
        <div className="form-group">
            <label>Cuisine</label>
            <select className="custom-select" id="inputGroupSelect04"
                    aria-label="Example select with button addon">
                <option selected>Choose one</option>
                {props.cuisines.map(cuisine =>
                    <option value={cuisine.name}>{cuisine.name}</option>
                )}
            </select>
        </div>
    );
}

export default SelectInput
