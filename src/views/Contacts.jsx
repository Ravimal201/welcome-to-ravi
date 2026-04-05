import React from "react";
import "../index.css";
import ContactForm from "../components/contactFrom";

function Contacts() {
  return (
    <section className="contactpage">
      <div className="contactpage-container">
        <div className="contact-title">
          <h1>CONTACT ME</h1>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contacts;
