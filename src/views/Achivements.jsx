import { motion } from "framer-motion";
import { achievementData } from "../models/achivementData";
import "../index.css";

export default function Achievement() {
  return (
    <section className="achievementpage">
      <div className="achievement-container">
        {/* TITLE */}
        <motion.div
          className="achievement-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>CERTIFICATES</h1>
          <p>
            Training milestones that helped sharpen my technical depth,
            practical troubleshooting, and real-world problem solving.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="achivementcards">
          {achievementData.map((item, index) => (
            <motion.div
              className="book"
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* INNER */}
              <div className="inside">
                <div className="inside-content">
                  <p className="description">{item.description}</p>
                  <p className="status">{item.status}</p>
                  {item.year && <p className="year">{item.year}</p>}
                </div>
              </div>

              {/* COVER */}
              <div className="cover">
                <div className="cover-content">
                  <p className="title">{item.title}</p>
                  <p className="university">{item.university}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
