import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
              <div className = "titulo"></div>
              <div>
                <button className = "boton-reiniciar">
                Jugar de Nuevo
                </button>
              </div>
              
              <div className="intentos">
                Intentos:
              </div>
            </header>
        );
    }
};