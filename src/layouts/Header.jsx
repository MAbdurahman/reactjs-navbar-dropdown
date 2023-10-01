import React from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header className="header">
            <div className="header__navbar">
                <Link to="/" className="logo">
                    LogoBrand
                </Link>
                <Navbar />
            </div>
        </header>

    );
};