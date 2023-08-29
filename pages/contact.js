import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

const ContactPage = () => {
  return (
    <>
      <Head>
        {" "}
        <title>Contact Me</title>
        <meta
          name="description"
          content="Contact me for any query regarding the blog and programming."
        />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
