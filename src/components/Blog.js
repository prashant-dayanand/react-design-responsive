import React from "react";
import Heading from "./Heading";
import BlogPost from "./BlogPost";

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-box">
          <Heading
            title="Read Our Blog"
            description="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iusto voluptates eius quas nihil aliquid voluptate blanditiis accusamus, repellendus expedita!"
          />
        </div>
        <div className="blog-posts">
          <BlogPost
            title="Blog Post One"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <BlogPost
            title="Blog Post Two"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
          />
          <BlogPost
            title="Blog Post Three"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
          <BlogPost
            title="Blog Post Four"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
