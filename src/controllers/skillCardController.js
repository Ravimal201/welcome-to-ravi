// controllers/useCardController.js

import { useState } from "react";

export default function skillCardController() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    handleCardClick,
  };
}