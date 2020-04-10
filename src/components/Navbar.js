import React from 'react';
import Search from "./Search.js"
import "./Navbar.css"

function Navbar() {

    return (
        <div className="navbar">
            <div className="logo bold">Employee Directory</div>
            <div className="descriptor">
                <div className="bold">Search for an Employee: </div>
                <Search />
            </div>
        </div>
    )
}
export default Navbar;