import React from "react";
import "./feature.css";

// Feature component accepts prompts that can be passed
const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        {/* the plain div that will be used to style the line above h1 */}
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
