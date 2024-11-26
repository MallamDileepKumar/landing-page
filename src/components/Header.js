import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Welcome to Our Website</h1>
            <p className="header-description">Discover amazing content with us</p>
            <div className="header-buttons">
                <button className="btn see-more">See More</button>
                <button className="btn call-to-action">Call to Action</button>
            </div>
        </header>
    );
}

export default Header;
