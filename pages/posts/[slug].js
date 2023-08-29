import React from "react";
import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostFiles } from "../../helpers/posts-util";
import Head from "next/head";

const PostDetailsPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const getSinglePost = getPostData(slug);

  return {
    props: {
      post: getSinglePost,
    },
    revalidate: 600, //Why we are adding revalidate over here because we are not
    //going for the single post we are just fetching the single post
    //and when adding the revalidate whenever we update the markdown file
    //so without building the entire application, but still we get the latest data
    //once every 10 minutes.
  };
};

//we have to add another function getStaticPaths because its a dynamic
//file which are working on which prepares all the dynamic paths.

export const getStaticPaths = () => {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};

//blocking works in manner when we have to pre-generate most the commonly read post
//hence those post will be pre-generated

export default PostDetailsPage;
