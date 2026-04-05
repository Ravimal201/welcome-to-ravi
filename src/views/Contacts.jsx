import { motion } from "framer-motion";
import "../index.css";
import ContactForm from "../components/contactFrom";

function Contacts() {
  return (
    <section className="contactpage">
      <div className="contactpage-container">
        {/* TITLE */}
        <motion.div
          className="contact-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>CONTACT ME</h1>
        </motion.div>

        {/* FORM */}
        <motion.div
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
