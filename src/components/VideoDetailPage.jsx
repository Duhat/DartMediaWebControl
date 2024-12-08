import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Для получения параметра videoId из URL
import recommendedVideos from './../VideosData'; // Импорт данных о видео
import './VideoDetailPage.css';

const VideoDetailPage = () => {
  const { videoId } = useParams(); // Получаем videoId из параметра URL
  const [video, setVideo] = useState(null); // Состояние для текущего видео

  useEffect(() => {
    // Находим видео по его ID из файла VideosData.js
    const foundVideo = recommendedVideos.find((video) => video.id === parseInt(videoId));
    if (foundVideo) {
      setVideo(foundVideo);
    }
  }, [videoId]);

  if (!video) {
    return <p>Видео не найдено</p>;
  }

  return (
    <div className="video-detail-page">
      <h1>{video.title}</h1>
      
      {/* Встраиваем iframe для отображения видео */}
      <div className="video-container" dangerouslySetInnerHTML={{ __html: video.iframe }}></div>
      
      <p>{video.description || 'Описание отсутствует'}</p>
    </div>
  );
};

export default VideoDetailPage;
