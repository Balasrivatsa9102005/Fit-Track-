import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <h1 className="landing-title">Welcome to <span>FitTrack</span> 💪</h1>
        <p className="landing-subtitle">Transform your body, track your progress</p>
        
        <div className="landing-buttons">
          <button 
            className="cta-button primary" 
            onClick={() => navigate('/register')}
          >
            Join Now
          </button>
          <button 
            className="cta-button secondary" 
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;