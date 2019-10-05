import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
        <header style={headerStyle}>
            <h1 style={{ color: '#FFFFFF'}}>
                Todo List
            </h1>
            <NavLink style={{color: '#FFFFFF'}} to="/">Home</NavLink> | <NavLink style={{color: '#FFFFFF'}} to="/about">About</NavLink>

        </header>
        </React.Fragment>
    )
}

const headerStyle= {
    background: '#333',
    colour: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default Header
