import React from "react";
import "./blogs.css";

// import article component
import { Article } from "../../components";

// import images
import { blog1, blog2, blog3, blog4, blog5 } from "./import";
const Blogs = () => {
  return (
    // a div with class name and id so that it can be used to scroll up and down
    <div className="gpt3__blog section'__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening and we are blogging about it
        </h1>
      </div>
      {/* structure for blogs */}
      <div className="gpt3__blog-container">
        {/* div for top blog */}
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog1}
            date="December 5th 2021"
            title="Most Recent Article"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog2}
            date="December 5th 2021"
            title="Related Articles"
          />
          <Article
            imgUrl={blog3}
            date="December 5th 2021"
            title="Related Articles"
          />
          <Article
            imgUrl={blog4}
            date="December 5th 2021"
            title="Related Articles"
          />
          <Article
            imgUrl={blog5}
            date="December 5th 2021"
            title="Related Articles"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
