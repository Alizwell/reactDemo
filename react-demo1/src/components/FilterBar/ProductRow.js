import React, { Component } from 'react';

function ProductRow(props){
  return (
    <p>
        <span> {this.props.name} </span>
        <span> {this.props.value} </span>      
    </p>
  );
}

export default ProductRow;