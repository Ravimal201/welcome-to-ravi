import React, { useState } from "react";
import "../index.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=universityravimal@gmail.com&su=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="form-wrapper">
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={handleSend}>
            <p className="form-heading">Send a Message</p>

            <div className="form-field">
              <input
                required
                placeholder="Name"
                className="input-field"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Email"
                className="input-field"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Subject"
                className="input-field"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="form-field">
              <textarea
                required
                placeholder="Message"
                cols={30}
                rows={3}
                className="input-field"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="sendMessage-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
