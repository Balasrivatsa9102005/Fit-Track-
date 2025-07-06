import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = true; // Replace with actual auth state

  const handleLogout = () => {
    // Add logout logic here
    console.log('User logged out');
    navigate('/'); // Redirect to landing page
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/dashboard" className="navbar-logo">FitTrack</Link> {/* Changed to /dashboard */}
      </div>
      
      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            <Link to="/post-workout" className="navbar-link">Post Workout</Link>
            <Link to="/calendar" className="navbar-link">Calendar</Link>
            <button onClick={handleLogout} className="navbar-logout">Logout</button>
          </>
        ) : (
          <Link to="/" className="navbar-link">Home</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;