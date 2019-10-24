import React, { Component } from 'react';
import './Carta.css';
//import FlipCard from 'react-flipcard';


export default class Carta extends Component{
    render(){
        return (
            <div className = "carta">
            <div id="flip-container">
            <div id="card1" className="card">
            <div className="front"></div>
            <div className="back"></div>
            </div>
            </div>
               
            <i className={`fa ${this.props.icono} fa-5x`}></i>
            </div>
        
        )
    }
};