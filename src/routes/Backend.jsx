import React from 'react';
import {Link} from 'react-router-dom'
export default function Backend() {

    return (
        <div className="center-content">
            <h2 className="center-content-title">Backend</h2>
            <section className="section-submenu">
                <Link className="submenu" to="/node-js">NodeJS</Link>
                <Link className="submenu" to="/php">PHP</Link>
            </section>
        </div>

    );
};