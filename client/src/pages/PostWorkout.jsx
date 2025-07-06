import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/PostWorkout.css";

const PostWorkout = () => {
  const navigate = useNavigate();
  const [workout, setWorkout] = useState({
    type: '',
    duration: '',
    intensity: 'medium',
    exercises: '',
    notes: '',
    calories: ''
  });

  const workoutTypes = [
    'Cardio', 'Strength Training', 'HIIT', 
    'Yoga', 'CrossFit', 'Swimming', 'Cycling'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Workout submitted:', workout);
    // Here you would typically send data to your backend
    navigate('/dashboard'); // Redirect after submission
  };

  return (
    <div className="post-workout-container">
      <div className="post-workout-card">
        <h2 className="post-workout-title">Log Your Workout</h2>
        <p className="post-workout-subtitle">Track your progress and stay motivated</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Workout Type</label>
            <select 
              name="type" 
              value={workout.type}
              onChange={handleChange}
              required
            >
              <option value="">Select workout type</option>
              {workoutTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Duration (minutes)</label>
              <input
                type="number"
                name="duration"
                value={workout.duration}
                onChange={handleChange}
                min="1"
                max="300"
                required
              />
            </div>

            <div className="form-group">
              <label>Intensity</label>
              <div className="intensity-options">
                {['low', 'medium', 'high'].map(level => (
                  <label key={level}>
                    <input
                      type="radio"
                      name="intensity"
                      value={level}
                      checked={workout.intensity === level}
                      onChange={handleChange}
                    />
                    <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Exercises Performed</label>
            <textarea
              name="exercises"
              placeholder="Example: Squats 3x12, Bench Press 4x8, Running 30min"
              value={workout.exercises}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Estimated Calories Burned</label>
              <input
                type="number"
                name="calories"
                value={workout.calories}
                onChange={handleChange}
                min="1"
                placeholder="Optional"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Additional Notes</label>
            <textarea
              name="notes"
              placeholder="How did you feel? Any progress notes?"
              value={workout.notes}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <button type="submit" className="submit-button">
            Save Workout
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostWorkout;