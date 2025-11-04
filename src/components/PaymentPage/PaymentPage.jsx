import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const plans = {
  starter: {
    name: "Starter",
    price: 49,
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Free SSL Certificate",
      "Email Support",
    ],
  },
  business: {
    name: "Business",
    price: 149,
    features: [
      "10 Websites",
      "100 GB SSD Storage",
      "Free Domain for 1 Year",
      "Priority Support",
    ],
  },
  pro: {
    name: "Pro",
    price: 349,
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

  // Payment state
  const [method, setMethod] = useState("upi");
  const [terms, setTerms] = useState(false);

  if (!plan) return <p style={{ padding: "2rem", color: "var(--text)" }}>Plan not found</p>;

  // calculations
  const base = plan.price;
  const discount = +(base * 0.1).toFixed(2); // 10% discount
  const gst = +((base - discount) * 0.18).toFixed(2); // 18% GST
  const total = +(base - discount + gst).toFixed(2);

  const handlePayment = () => {
    if (!terms) {
      alert("Please accept terms & conditions to continue.");
      return;
    }
    // Dummy success flow
    alert(`Payment Successful for ${plan.name} Plan! (Method: ${method.toUpperCase()})`);
    navigate("/");
  };

  return (
    <div className="payment-page fade-in">
      {/* LEFT: Plan details + Payment methods */}
      <div className="payment-left card">
        <div className="left-header">
          <h2>{plan.name} Plan</h2>
          <div className="left-price">₹{base.toFixed(2)} <span className="period">/ month</span></div>
        </div>

        <div className="features">
          <h4>What you get</h4>
          <ul className="features-list">
            {plan.features.map((f, idx) => (
              <li key={idx}><span className="tick">✓</span> {f}</li>
            ))}
          </ul>
        </div>

        <div className="payment-methods">
          <h4>Select Payment Method</h4>

          <div className="methods-grid">
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
                <small>HDFC, SBI, ICICI, Axis</small>
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
          </div>

          {/* mock UPI QR preview for UPI method */}
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

      {/* RIGHT: Order summary + checkout */}
      <div className="payment-right card">
        <h3 className="summary-title">Order Summary</h3>

        <div className="summary-box">
          <div className="summary-row">
            <span>Base Price</span>
            <span>₹{base.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Discount (10%)</span>
            <span className="text-negative">-₹{discount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>GST (18%)</span>
            <span>+₹{gst.toFixed(2)}</span>
          </div>

          <div className="summary-total">
            <span>Total Payable</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className="tax-note">
            <small>Includes all applicable taxes. 30-day money-back guarantee.</small>
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

        <button
          className="btn btn-outline btn-back"
          onClick={() => navigate(-1)}
          style={{ marginTop: "0.8rem" }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
