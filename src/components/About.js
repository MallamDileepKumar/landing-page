import React from "react";
import LazyLoad from "react-lazy-load";
import "./About.css";
import heroImage from "../assets/hero-image.jpg.jpg";

function About() {
    return (
        <section className="about">
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
                We are passionate about providing great experiences and value to our customers. Explore more to learn what we do!
            </p>
            <LazyLoad>
                <img src={heroImage} alt="About Us" className="about-image" />
            </LazyLoad>
        </section>
    );
}

export default About;
