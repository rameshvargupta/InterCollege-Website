import React, { useState } from 'react';


const Marquee = () => {
  const [isHovered, setIsHovered] = useState(false);

  const stopMarquee = () => {
    setIsHovered(true);
  };

  const startMarquee = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`marquee-container ${isHovered ? 'paused' : ''}`}
      onMouseOver={stopMarquee}
      onMouseOut={startMarquee}
    >
      <div className="marquee-content">
      <a id='slideMain' href="#">Entry date 2023-2024 | Last date 20/07/2024 |</a>
      </div>
    </div>
  );
};

export default Marquee;
