import React, { useState } from 'react';
import './Categories.css'; // Стили для категорий

const Categories = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    "All", "Football", "Basketball", "Tennis", "Baseball", "Hockey", "Boxing", "Cycling"
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategorySelect(category); // Обновляем выбранную категорию в родительском компоненте
  };

  return (
    <div className="categories">
      <h2>Sports Categories</h2>
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
