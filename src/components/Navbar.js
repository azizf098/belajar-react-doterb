import React, { Component } from 'react';
import '../style/menu.css';

class Menu extends Component {
    render() {
        return (
            <div>
                <header className="header flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"/>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><a href="home">Home</a></li>
                        <li><a href="contact">Contact</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </header>
            </div>
        );
    }
}
 
export default Menu;
