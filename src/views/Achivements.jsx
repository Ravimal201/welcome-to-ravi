import { achievementData } from "../models/achivementData";
import "../index.css";

export default function Achievement() {
  return (
    <section className="achievementpage">
      <div className="achievement-container">
        <div className="achievement-title">
          <h1>CERTIFICATES</h1>
          <p>
            Training milestones that helped sharpen my technical depth,
            practical troubleshooting, and real-world problem solving.
          </p>
        </div>

        <div className="achivementcards">
          {achievementData.map((item) => (
            <div className="book" key={item.id}>
              {/* INNER PAGE */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
