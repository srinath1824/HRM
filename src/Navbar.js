import React, { Component } from 'react';

const Navbar=()=>{
        return (
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <a className="brand-logo">Poke'times</a>
                    <ul className="right">
                        <li><a herf="/">Signup</a></li>
                        <li><a herf="/register">register</a></li>
                        <li><a herf="/upload">upload</a></li>

                    </ul>
                </div>
            </nav>
        )
    
}
export default Navbar;