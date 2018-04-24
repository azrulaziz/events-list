import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header__logo">
                <NavLink to="/" exact={true} className="Header__logo--link"><h2>Event List</h2></NavLink>
            </div>
            <div className="Header__nav">
                <NavLink to="/" exact={true} className="Header__nav--link">HOME</NavLink>
            </div>
        </div>
    )
}

export default Header