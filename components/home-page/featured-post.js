import React from "react";
import classes from "./featured-posts.module.css";
import PostGrid from "../posts/post-grid";

const FeaturedPost = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPost</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPost;
