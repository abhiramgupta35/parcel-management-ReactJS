import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <header className="navbar">
            <div className="logo">ParcelMan</div>
            <nav>
                <ul className="nav-links">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/parcelform'>New Parcel</a></li>
                    <li><a href='/parcellist'>Parcel Lists</a></li>
                </ul >
            </nav >
            <div className="contact-button">
                <a>Contact Us</a>
            </div>
        </header >

    )
}

export default Header