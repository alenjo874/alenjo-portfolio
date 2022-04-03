import React, { useState } from "react";
import { send } from "emailjs-com";

function ContactMe() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_3suslm2", "template_z2jj9wq", toSend, "-3zPa_KDB7yogMGVm")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({
      from_name: "",
      message: "",
      reply_to: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="pages-container" id="contact">
      <div className="pages-header-container">
        <h2 className="pages-name">Contact Me</h2>
        <div className="header-backdrop"></div>
      </div>
      <div className="call-to-action">
        <p>
          If you <b>like</b> what you <b>see</b>, email me at{" "}
          <b>alenjo874@gmail.com</b>
        </p>
      </div>
      <form className="email-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={toSend.from_name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="reply_to"
          placeholder="Your Email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <button type="submit" className="view-work-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
