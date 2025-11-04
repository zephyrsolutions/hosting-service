import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 299,
    tag: "Best for beginners",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Static Bandwidth",
      "Free SSL",
      "Static Environment",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: 399,
    tag: "Most Popular",
    features: [
      "Unlimited Websites",
      "100 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL & Daily Backups",
      "Priority Support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 499,
    tag: "For growing businesses",
    features: [
      "Unlimited Websites",
      "200 GB SSD Storage",
      "Free CDN & SSL",
      "Staging Environment",
      "Dedicated Resources",
    ],
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Simple Pricing. No Surprises.</h2>
          <p>
            Choose a plan that fits your needs — scale up anytime. All plans
            include 24/7 support and a 30-day money-back guarantee.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article key={plan.id} className="plan-card">
              <div className="plan-top">
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">₹{plan.price}</span>
                  <span className="period">/month</span>
                </div>
                <div className="plan-tag">{plan.tag}</div>
              </div>

              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="plan-cta">
                <button
                  className="btn btn-outline"
                  onClick={() => navigate(`/payment/${plan.id}`)}
                >
                  Buy {plan.name}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
