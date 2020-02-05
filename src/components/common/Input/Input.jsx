import React from 'react';

function Input(props) {

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input name={props.name} type={props.type} className="form-control" onChange={props.handleChange}/>
        </div>
    )
}

export default Input
