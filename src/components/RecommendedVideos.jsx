import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации
import recommendedVideos from './../VideosData'; // Импорт данных о видео
import './RecommendedVideos.css';

const RecommendedVideos = ({ category }) => {
  const navigate = useNavigate(); // Хук для навигации

  // Если выбрана категория, фильтруем видео по тегу
  const filteredVideos = category && category !== "All"
    ? recommendedVideos.filter((video) => video.tag.toLowerCase().includes(category.toLowerCase()))
    : recommendedVideos;

  // Обработчик клика на видео, переход на страницу видео
  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`); // Передаем ID видео через параметр URL
  };

  return (
    <div className="recommended-videos">
      <h2>{category && category !== "All" ? `${category} Videos` : 'All Recommended Videos'}</h2>
      <div className="videos-list">
        {filteredVideos.map((video) => (
          <div 
            key={video.id} 
            className="video-item" 
            onClick={() => handleVideoClick(video.id)} // При клике на видео происходит переход
          >
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedVideos;
