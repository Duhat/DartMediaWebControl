import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Для навигации
import './LoginPage.css'
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Используем useNavigate для перехода

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика для отправки формы
    console.log('Login submitted:', { username, password });
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="switch-auth">
        Don't have an account?{' '}
        <button
          type="button"
          className="register-link"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
