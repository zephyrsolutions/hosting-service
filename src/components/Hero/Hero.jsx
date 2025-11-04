import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>Fast, Secure & Affordable Web Hosting</h1>
          <p>
            Launch your website with powerful hosting solutions built for
            performance and reliability. Perfect for personal sites, blogs, and
            small businesses.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-ghost">Compare Plans</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="card-hero">
            <h3>Start for Free</h3>
            <p>Try our one-week free trial before you commit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
