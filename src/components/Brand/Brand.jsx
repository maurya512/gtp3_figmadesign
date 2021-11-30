import React from "react";
import "./brand.css";

// import images from the helper file
import { google, atlassian, dropbox, shopify, slack } from "./import";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {/* div for all images */}
      <div>
        <img src={google} alt="google" />
        <img src={dropbox} alt="dropbox" />
        <img src={slack} alt="slack" />
        <img src={shopify} alt="shopify" />
        <img src={atlassian} alt="atlassian" />
      </div>
    </div>
  );
};

export default Brand;
