import React from "react";
import { Feature } from "../../components";
import "./WhatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        {/* Feature component created before will be reused at many different places */}
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        {/* classname implemented in app.css */}
        <h1 className="gradient__text">
          Your possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      {/* Feature component that will contain 3 features */}
      <div className="gpt3__whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default WhatGPT3;
