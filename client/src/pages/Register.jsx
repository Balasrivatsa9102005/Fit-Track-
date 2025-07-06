import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="register-container">
      <div className="image-section">
        {/* Image will be set via CSS background */}
      </div>
      
      <div className="form-section">
        <div className="register-card">
          <h2 className="register-title">Create Your Account</h2>
          <p className="register-subtitle">Join our fitness community</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>
            
            <button type="submit" className="register-button">
              Get Started
            </button>
          </form>
          
          <p className="login-link">
            Already have an account? <span onClick={() => navigate('/login')}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;