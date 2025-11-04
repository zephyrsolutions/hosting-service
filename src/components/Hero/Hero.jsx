import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Animated glow orbs */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <div className="container hero-inner">
        <div className="hero-left">
          <h1>
            Fast, Secure & <span>Affordable</span> Web Hosting
          </h1>
          <p>
            Launch your website with powerful hosting solutions built for
            performance, speed, and reliability. Perfect for startups, creators,
            and tech innovators.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary glow">🚀 Get Started</button>
            <button className="btn btn-ghost outline">Compare Plans</button>
          </div>
        </div>

        {/* <div className="hero-right">
          <div className="card-hero">
            <h3>Start for Free ⚡</h3>
            <p>Try our one-week free trial before you commit.</p>
            <div className="pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
