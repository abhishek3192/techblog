import React from "react";
import Image from "next/image";
import classes from "./post-header.module.css";

const PostHeader = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={200} height={150} priority />
    </header>
  );
};

export default PostHeader;
