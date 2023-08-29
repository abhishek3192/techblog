import classes from "./hero.module.css";
import Image from "next/legacy/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/sites/me.webp"
          alt="My Image"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hello my name is Abhishek</h1>
      <p>
        I blog about the web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
};

export default Hero;
