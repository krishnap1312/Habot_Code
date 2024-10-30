import React from "react";
import "./Context.css";

function Context() {
  return (
    <div>
      <div className="ContextDiv">
        <div className="signup-section">
          <h1>
            Ready to dive into <span className="highlight">HABOT?</span>
          </h1>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="signup-button">
          Sign up Today! <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="city-list">
          <div className="city-box">Abu Dhabi</div>
          <div className="city-box">Dubai</div>
          <div className="city-box">Sharjah & Ajman</div>
          <div className="city-box">Fujairah</div>
          <div className="city-box">Ras Al Khaimah</div>
          <div className="city-box">Umm Al Quwain</div>
        </div>
      </div>
    </div>
  );
}

export default Context;
