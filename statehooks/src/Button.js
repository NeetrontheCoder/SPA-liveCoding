import React, { Component } from 'react';
import PropTypes from 'prop-types';


function Button(props) {
    return (
        <button style={{ backgroundColor: props.color }}>{props.title}</button>
    )
} 
export default Button;





