import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "../layouts/Layout";
import Home from "../routes/Home"
import About from "../routes/About"
import Services from "../routes/Services";
import WebDesign from "../routes/WebDesign";
import WebDevelopment from "../routes/WebDevelopment";
import Frontend from "../routes/Frontend"
import Backend from "../routes/Backend"
import NodeJS from "../routes/NodeJS";
import PHP from "../routes/PHP";
import SEO from "../routes/SEO"
import CopyWriting from "../routes/CopyWriting";
import Products from "../routes/Products";
import Software from "../routes/Software";
import Websites from "../routes/Websites";
import WebApps from "../routes/WebApps";
import Contact from "../routes/Contact";
import NotFound from "../routes/NotFound";


export default function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="web-design" element={<WebDesign />} />
                    <Route path="web-development" element={<WebDevelopment />} />
                    <Route path="frontend" element={<Frontend />} />
                    <Route path="backend" element={<Backend />} />
                    <Route path="node-js" element={<NodeJS />} />
                    <Route path="php" element={<PHP />} />
                    <Route path="seo" element={<SEO />} />
                    <Route path="copy-writing" element={<CopyWriting />} />
                    <Route path="products" element={<Products />} />
                    <Route path="software" element={<Software />} />
                    <Route path="websites" element={<Websites />} />
                    <Route path="web-apps" element={<WebApps />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

        </>

    );
};