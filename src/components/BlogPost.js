import React from "react";

function BlogPost({ title, description }) {
  return (
    <div class="blog-post">
      <img src="images/blog.jpg" alt="" />
      <div className="post-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default BlogPost;
