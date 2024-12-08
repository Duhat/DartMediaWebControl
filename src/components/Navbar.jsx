import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для навигации
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Создаем объект navigate для управления маршрутом

  // Функция для перехода на главную страницу при клике на логотип
  const handleLogoClick = () => {
    navigate('/'); // Переход на главную страницу
  };

  // Функция для перехода на страницу авторизации
  const handleLoginClick = () => {
    console.log("Navigating to /login");
    navigate('/login'); // Переход на страницу логина
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={handleLogoClick}>
        <img 
          src="https://static.tildacdn.com/tild6264-3734-4865-a137-306437306463/1.png" 
          alt="Logo" 
          style={{ width: '150px', height: 'auto' }}  // Устанавливаем размер логотипа
        />
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search for videos..." />
      </div>
      <div className="navbar__auth">
        <button className='login_button' onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
