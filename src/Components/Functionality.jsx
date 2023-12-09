import React, { useState } from 'react';

const Functionality = () => {
  const [highlightScroll, setHighlightScroll] = useState(0);
  const [filterScroll, setFilterScroll] = useState(0);

  const handleHighlightScroll = (direction) => {
    if (!scrolling) {
      scrolling = true;
      const newScroll = direction === 'next' ? highlightScroll + step : highlightScroll - step;
      setHighlightScroll(newScroll);
      scrolling = false;
    }
  };

  const handleFilterScroll = (direction) => {
    if (!scrolling) {
      scrolling = true;
      const newScroll = direction === 'next' ? filterScroll + stepFilter : filterScroll - stepFilter;
      setFilterScroll(newScroll);
      scrolling = false;
    }
  };

  let scrolling = false;
  const step = 100; // Use this for the highlight section
  const stepFilter = 60; // Use this for the filter section

  return (
    <div>
      {/* ... your React JSX code ... */}
      <button className="back" onClick={() => handleHighlightScroll('back')}>Back</button>
      <button className="next" onClick={() => handleHighlightScroll('next')}>Next</button>
      <button className="back-menus" onClick={() => handleFilterScroll('back')}>Back</button>
      <button className="next-menus" onClick={() => handleFilterScroll('next')}>Next</button>
    </div>
  );
};

export default Functionality;
