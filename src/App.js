import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import VideoDetailPage from './components/VideoDetailPage'; // Импорт страницы с видео
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/video/:videoId" element={<VideoDetailPage />} /> {/* Новый маршрут */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
