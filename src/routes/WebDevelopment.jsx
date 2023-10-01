import React from 'react';
import {Link} from 'react-router-dom'

export default function WebDevelopment() {

    return (
        <div>
            <h2>Web Development</h2>
            <section className="section-submenu">
                <Link className="submenu-link" to="/frontend">Frontend</Link>
                <Link className="submenu-link" to="/backend">Backend</Link>
            </section>
        </div>

    );
};