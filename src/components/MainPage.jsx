// MainPage.js
import React, { useState } from 'react';
import Categories from './Categories';
import RecommendedVideos from './RecommendedVideos';

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="main-page">
      <div className="content">
        <div className="sidebar">
          <Categories onCategorySelect={handleCategorySelect} />
        </div>
        <div className="videos-section">
          <RecommendedVideos category={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
