import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DomainRenewal.css";

const domainData = {
  "t3enterprise.in": {
    domain: "t3enterprise.in",

    message:
      "Domain expired, please renew before 12-08-2026.",

    renewalFee: 2649,

    multiYearPlans: [
      {
        years: 1,
        label: "1 Year",
        discount: 100,
      },
      {
        years: 2,
        label: "2 Years",
        discount: 350,
      },
      {
        years: 5,
        label: "5 Years",
        discount: 1200,
      },
    ],
  },
};

const DomainRenewal = () => {
  const navigate = useNavigate();

  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [showMultiYear, setShowMultiYear] = useState(false);

  const handleSearch = () => {
    const searchDomain = domain.trim().toLowerCase();

    setSearched(true);
    setShowMultiYear(false);

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

  const handleRenew = (plan) => {
    const baseAmount = result.renewalFee * plan.years;

    const total = baseAmount - plan.discount;

    navigate("/domain-renewal-payment", {
      state: {
        domain: result.domain,
        years: plan.years,
        label: plan.label,
        renewalFee: result.renewalFee,
        baseAmount,
        discount: plan.discount,
        total,
      },
    });
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
              placeholder="Enter your domain e.g. t3enterprise.in"
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
                {/* Domain Header */}
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

                {/* Warning */}
                <div className="domain-warning">

                  <span className="warning-icon">
                    !
                  </span>

                  <p>
                    {result.message}
                  </p>

                </div>

                {/* One Year Renewal */}
                <div className="renewal-summary">

                  <div className="renewal-row">
                    <span>Renewal Fee</span>

                    <strong>
                      ₹
                      {result.renewalFee.toLocaleString(
                        "en-IN"
                      )}
                    </strong>
                  </div>

                  <div className="renewal-row">

                    <span>
                      Discount
                    </span>

                    <strong className="discount">
                      -₹100
                    </strong>

                  </div>

                  <div className="renewal-divider"></div>

                  <div className="renewal-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      ₹
                      {(result.renewalFee - 100).toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                  </div>

                </div>

                {/* One Year Button */}
                <div className="renewal-action">

                  <button
                    className="renew-domain-btn"
                    onClick={() =>
                      handleRenew({
                        years: 1,
                        label: "1 Year",
                        discount: 100,
                      })
                    }
                  >
                    Renew for 1 Year • ₹2,549
                  </button>

                </div>

              {/* Multi-Year Renewal */}
<div className="multi-year-renewal">

  <div className="multi-year-heading">
    <div>
      <span className="section-eyebrow">
        SAVE MORE
      </span>

      <h3>
        Renew for Multiple Years
      </h3>

      <p>
        Extend your domain registration and get
        additional savings on longer renewal periods.
      </p>
    </div>

    <div className="multi-year-icon">
      ⟳
    </div>
  </div>

  <div className="renewal-table-wrapper">

    <table className="renewal-table">

      <thead>
        <tr>
          <th>Duration</th>
          <th>Regular Price</th>
          <th>Discount</th>
          <th>You Pay</th>
          <th></th>
        </tr>
      </thead>

      <tbody>

        {result.multiYearPlans.map((plan) => {

          const baseAmount =
            result.renewalFee * plan.years;

          const total =
            baseAmount - plan.discount;

          return (
            <tr
              key={plan.years}
              className={
                plan.years === 5
                  ? "best-value-row"
                  : ""
              }
            >

              <td>
                <div className="duration-cell">

                  <strong>
                    {plan.label}
                  </strong>

                  {plan.years === 5 && (
                    <span className="best-value-badge">
                      BEST VALUE
                    </span>
                  )}

                </div>
              </td>

              <td>
                <span className="regular-price">
                  ₹
                  {baseAmount.toLocaleString("en-IN")}
                </span>
              </td>

              <td>
                <span className="table-discount">
                  -₹
                  {plan.discount.toLocaleString("en-IN")}
                </span>
              </td>

              <td>
                <strong className="table-total">
                  ₹
                  {total.toLocaleString("en-IN")}
                </strong>
              </td>

              <td>
                <button
                  className="table-renew-btn"
                  onClick={() => handleRenew(plan)}
                >
                  Renew
                  <span>→</span>
                </button>
              </td>

            </tr>
          );
        })}

      </tbody>

    </table>

  </div>

  <div className="renewal-table-footer">

    <span>
      🔒 Secure renewal
    </span>

    <span>
      Instant activation
    </span>

    <span>
      No hidden charges
    </span>

  </div>

</div>

              </>
            ) : (

              /* Domain Not Found */
              <div className="domain-not-found">

                <h3>
                  Domain Not Found
                </h3>

                <p>
                  We couldn't find renewal
                  information for{" "}
                  <strong>{domain}</strong>.
                </p>

                <p>
                  Please check the domain name
                  and try again.
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