import React, { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

const sendContactData = async (contactDetails) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
};

const ContactForm = () => {
  const initialFormData = Object.freeze({
    email: "",
    name: "",
    message: "",
  });

  const [formData, setFormData] = useState(initialFormData);
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequstError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "Error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequstError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setRequestStatus("pending");
    try {
      await sendContactData({ ...formData });
      setRequestStatus("success");
      setFormData({ ...initialFormData });
    } catch (error) {
      setRequstError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Voila !",
      message: "Your message is sent successfully",
    };
  }

  if (requestStatus === "Error") {
    notification = {
      status: "error",
      title: "Error",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you??</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              id="name"
              value={formData.name}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            required
            onChange={handleChange}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit" disabled={requestStatus === "pending"}>
            Send Message
          </button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
