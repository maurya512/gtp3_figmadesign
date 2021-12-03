import React from "react";
import "./cta.css";
const Cta = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access</p>
        <h3>Register today & start exploring the endless possibilites.</h3>
      </div>
      {/* button to register for early access */}
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default Cta;
