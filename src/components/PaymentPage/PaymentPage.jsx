import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const plans = {
  starter: {
    name: "Starter",
    price: 299,
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Free SSL Certificate",
      "Static Deployment Panel",
    ],
  },
  business: {
    name: "Business",
    price: 499,
    features: [
      "10 Websites",
      "100 GB SSD Storage",
      "Free Domain for 1 Year",
      "Priority Support",
    ],
  },
  pro: {
    name: "Pro",
    price: 899,
    features: [
      "Unlimited Websites",
      "Unlimited SSD Storage",
      "Free Domain + SSL",
      "24/7 Premium Support",
    ],
  },
};

const PaymentPage = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const plan = plans[planId];

  const [method, setMethod] = useState("netbanking");
  const [terms, setTerms] = useState(false);
  const [duration, setDuration] = useState(12);

  if (!plan) return <p style={{ padding: "2rem", color: "var(--text)" }}>Plan not found</p>;

  // pricing calculation
  const baseAmount = plan.price * duration;
  const discount = 292;
  const gst = (baseAmount - discount) * 0.18;
  const total = baseAmount - discount + gst;

  const handlePayment = () => {
    if (!terms) {
      alert("Please accept terms & conditions to continue.");
      return;
    }
    alert(`Payment Successful for ${plan.name} Plan (${duration} months)!`);
    navigate("/");
  };

  return (
    <div className="payment-page fade-in">
      {/* LEFT: Plan details + Payment methods */}
      <div className="payment-left card">
        <div className="left-header">
          <h2>{plan.name} Plan</h2>
          <div className="left-price">
            ₹{plan.price.toFixed(2)} <span className="period">/ month</span>
          </div>
        </div>

        <div className="features">
          <h4>What you get</h4>
          <ul className="features-list">
            {plan.features.map((f, idx) => (
              <li key={idx}>
                <span className="tick">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="payment-methods">
          <h4>Select Payment Method</h4>

          <div className="methods-grid">
            <label className={`method ${method === "netbanking" ? "active" : ""}`}>
              <input
                type="radio"
                name="payment"
                value="netbanking"
                checked={method === "netbanking"}
                onChange={() => setMethod("netbanking")}
              />
              <div className="method-body">
                <strong>NetBanking</strong>
                <small>HDFC, SBI, ICICI, Axis and more..</small>
              </div>
            </label>

            <label className={`method ${method === "card" ? "active" : ""}`}>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={method === "card"}
                onChange={() => setMethod("card")}
              />
              <div className="method-body">
                <strong>Card</strong>
                <small>Visa / MasterCard / RuPay</small>
              </div>
            </label>

            <label className={`method ${method === "wallet" ? "active" : ""}`}>
              <input
                type="radio"
                name="payment"
                value="wallet"
                checked={method === "wallet"}
                onChange={() => setMethod("wallet")}
              />
              <div className="method-body">
                <strong>Wallets</strong>
                <small>Paytm / Amazon Pay</small>
              </div>
            </label>

            <label className={`method ${method === "upi" ? "active" : ""}`}>
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={method === "upi"}
                onChange={() => setMethod("upi")}
              />
              <div className="method-body">
                <strong>UPI</strong>
                <small>Google Pay / PhonePe / Paytm</small>
              </div>
            </label>
          </div>

          {method === "upi" && (
            <div className="upi-qr card">
              <div className="qr-left">
                <div className="qr-box">QR</div>
                <div className="qr-note">Scan with your UPI app</div>
              </div>
              <div className="qr-right">
                <div><strong>Or enter UPI ID</strong></div>
                <input className="input-upi" placeholder="example@upi" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Order Summary */}
      <div className="payment-right card">
        <h3 className="summary-title">Order Summary</h3>

        <div className="duration-select">
          <label htmlFor="duration">Select Duration:</label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
          >
            <option value={12}>12 Months</option>
            <option value={24}>24 Months</option>
            <option value={36}>36 Months</option>
            <option value={48}>48 Months</option>
          </select>
        </div>

        <div className="summary-box">
          <div className="summary-row">
            <span>Base Price ({duration} months)</span>
            <span>₹{baseAmount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <span className="text-negative">-₹{discount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax (18%)</span>
            <span>+₹{gst.toFixed(2)}</span>
          </div>

          <div className="summary-total">
            <span>Total Payable</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className="tax-note">
            <small>Includes all applicable taxes.</small>
          </div>
        </div>

        <div className="terms">
          <label className="terms-label">
            <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
            <span> I agree to the <a href="#">Terms & Conditions</a></span>
          </label>
        </div>

        
        
        <button className="btn btn-primary btn-pay" onClick={handlePayment}>
          Proceed to Payment • ₹{total.toFixed(2)}
        </button>

        {/* <button className="btn btn-outline btn-back" onClick={() => navigate(-1)}>
          ← Back
        </button> */}
        
        
      </div>
    </div>
  );
};

export default PaymentPage;
