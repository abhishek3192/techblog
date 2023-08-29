import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-post";
import { getFeaturedPosts } from "../helpers/posts-util";
import Head from "next/head";

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>Abhishek Blog</title>
        <meta
          name="description"
          content="I post about the programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
};

//why we have not used getServerSidePorps because its will decrease the performance
//and it will make request each and every time to all the files which will slow the process and most of the posts will never change

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Homepage;
