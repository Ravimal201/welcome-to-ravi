import { useState } from "react";
import "../index.css";

import { skillsData } from "../models/skillsData";
import useCardController from "../controllers/skillCardController";

export default function CardSlider() {
  const { activeIndex, handleCardClick } = useCardController();

  return (
    <section className="skillpage">
      <div className="skillcontainer">
        <h2 className="skilltitle">Technical Skills</h2>
        {/* OTHER CARDS BELOW */}
        <div className="skillcards-container">
          {skillsData.map((card, index) => {
            if (index === activeIndex) return null;

            return (
              <div
                key={card.id}
                className="skillcard small"
                onMouseEnter={() => {
                  setTimeout(() => handleCardClick(index), 80);
                }}
                onClick={() => handleCardClick(index)}
              >
                <h3>{card.title}</h3>
              </div>
            );
          })}
        </div>
        {/* ACTIVE CARD ON TOP */}
        {activeIndex !== null && (
          <div className="skillactive-row">
            {skillsData
              .filter((_, index) => index === activeIndex)
              .map((card) => (
                <div key={card.id} className="skillcard active">
                  <h3>{card.title}</h3>

                  <div className="skillcontent-container">
                    <ul className="skillcontent-list">
                      {card.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
