import React from 'react';
import {Link} from 'react-router-dom'
export default function Backend() {

    return (
        <div className="section-menu-item submenu-section">
            <h2>Backend</h2>
            <section className="section-submenu">
                <Link className="submenu-link" to="/node-js">NodeJS</Link>
                <Link className="submenu-link" to="/php">PHP</Link>
            </section>
        </div>

    );
};