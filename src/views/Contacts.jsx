import { motion } from "framer-motion";
import "../index.css";
import ContactForm from "../components/contactFrom";

function Contacts() {
  return (
    <section className="contactpage">
      <div className="contactpage-container">
        <motion.div
          className="contactpage-intro"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="contactpage-eyebrow">Let&apos;s work together</span>
          <h1>
            Have an idea?
            <br />
            Let&apos;s talk.
          </h1>
          <p>
            Tell me about your next project, opportunity, or big idea. I&apos;ll
            get back to you as soon as possible.
          </p>
          <a
            className="contactpage-email"
            href="mailto:universityravimal@gmail.com"
          >
            universityravimal@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="contactpage-form-shell"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default Contacts;
