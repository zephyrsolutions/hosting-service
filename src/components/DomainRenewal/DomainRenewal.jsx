import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DomainRenewal.css";

const domainData = {
  "t3enterprise.in": {
    domain: "t3enterprise.in",
    message: "Domain expired, please renew before 12-08-2026.",
    renewalFee: 2649.59,
    discount: 100.00,
    total: 2549.59,
  },
};

const DomainRenewal = () => {
  const navigate = useNavigate();

  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const searchDomain = domain.trim().toLowerCase();

    setSearched(true);

    if (domainData[searchDomain]) {
      setResult(domainData[searchDomain]);
    } else {
      setResult(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="domain-renewal-page">
      <div className="domain-renewal-container">

        {/* Header */}
        <div className="domain-header">
          <h1>Renew Your Domain</h1>

          <p>
            Search for your domain and renew it before it expires.
          </p>
        </div>

        {/* Search */}
        <div className="domain-search-wrapper">

          <div className="domain-search">
            <input
              type="text"
              placeholder="Enter your domain.."
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button
              className="domain-search-btn"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <small>
            Enter the complete domain name you want to renew.
          </small>
        </div>

        {/* Search Result */}
        {searched && (
          <div className="domain-result">

            {result ? (
              <>
                {/* Domain information */}
                <div className="domain-result-header">
                  <div>
                    <span className="result-label">
                      Domain
                    </span>

                    <h2>{result.domain}</h2>
                  </div>

                  <span className="expired-badge">
                    Expired
                  </span>
                </div>

                {/* Expiry message */}
                <div className="domain-warning">
                  <span className="warning-icon">!</span>

                  <p>{result.message}</p>
                </div>

                {/* Pricing */}
                <div className="renewal-summary">

                  <div className="renewal-row">
                    <span>Renewal Fee</span>
                    <strong>
                      ₹{result.renewalFee.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div className="renewal-row">
                    <span>Discount</span>
                    <strong className="discount">
                      -₹{result.discount.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div className="renewal-divider"></div>

                  <div className="renewal-total">
                    <span>Total</span>

                    <strong>
                      ₹{result.total.toLocaleString("en-IN")}
                    </strong>
                  </div>

                </div>

                {/* Action */}
                <div className="renewal-action">

                  <button
                    className="renew-domain-btn"
                    onClick={() =>
                      navigate("/domain-renewal-payment", {
                        state: result,
                      })
                    }
                  >
                    Renew Domain • ₹
                    {result.total.toLocaleString("en-IN")}
                  </button>

                </div>
              </>
            ) : (
              <div className="domain-not-found">
                <h3>Domain Not Found</h3>

                <p>
                  We couldn't find renewal information for{" "}
                  <strong>{domain}</strong>.
                </p>

                <p>
                  Please check the domain name and try again.
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};

export default DomainRenewal;