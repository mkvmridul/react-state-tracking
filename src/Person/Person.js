import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h4 onClick={props.delete}>Name: {props.data.name} <br/> Age is {props.data.age}</h4>
            <input type="text" onChange={props.changed} value={props.data.name}/>
        </div>   
    )
}

export default person;