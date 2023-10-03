import React from 'react';
import {Link} from 'react-router-dom';

export default function Services() {

    return (
        <div className="section-menu-item submenu-section">
            <h2>Services</h2>
            <section className="section-submenu">
                <Link className="submenu-link" to="/web-design">Web Design</Link>
                <Link className="submenu-link" to="/web-development">Web Dev</Link>
                <Link className="submenu-link" to="/seo">SEO</Link>
                <Link className="submenu-link" to="/copy-writing">Copy Writing</Link>
            </section>
        </div>

    );
};