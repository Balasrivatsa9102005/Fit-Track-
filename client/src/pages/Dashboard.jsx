import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import "../styles/Dashboard.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const weeklyCaloriesData = {
    labels: ['Jul 1', 'Jul 2', 'Jul 3', 'Jul 4', 'Jul 5', 'Jul 6', 'Jul 7'],
    datasets: [
      {
        label: 'Calories Burned',
        data: [1200, 1100, 1350, 980, 1450, 1600, 900],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  const workoutDistributionData = {
    labels: ['Legs', 'Shoulders', 'Back', 'Abs', 'Cardio'],
    datasets: [
      {
        label: 'Workout Distribution',
        data: [2, 1, 1, 1, 2],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
        borderColor: '#fff',
        borderWidth: 2,
      }
    ]
  };

  const workoutCategories = ['Legs', 'Shoulder', 'Back', 'ABS', 'Cardio'];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="horizontal-layout">
        {/* Left Stats */}
        <div className="left-column">
          <div className="stat-card">
            <h3>Calories Burned</h3>
            <div className="stat-value">12000 kcal</div>
            <div className="stat-change">+10%</div>
            <p className="stat-description">Total calories burned this week</p>
          </div>

          <div className="stat-card">
            <h3>Workouts</h3>
            <div className="stat-value">7</div>
            <div className="stat-change">+14%</div>
            <p className="stat-description">Sessions completed</p>
          </div>

          <div className="stat-card">
            <h3>Avg Calories</h3>
            <div className="stat-value">1714 kcal</div>
            <div className="stat-change">+9%</div>
            <p className="stat-description">Avg per session</p>
          </div>
        </div>

        {/* Middle Charts */}
        <div className="middle-column">
          <div className="chart-card">
            <h2>Weekly Calories Burned</h2>
            <div className="chart-container">
              <Bar
                data={weeklyCaloriesData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { position: 'top' },
                  },
                }}
              />
            </div>
          </div>

          <div className="chart-card" style={{ marginTop: '1.5rem', height: '350px' }}>
            <h2>Workout Distribution</h2>
            <Pie
              data={workoutDistributionData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'right',
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Right Category List */}
        <div className="right-column">
          <div className="categories-card">
            <h2>Workout Categories</h2>
            <ul className="categories-list">
              {workoutCategories.map((category, idx) => (
                <li key={idx}>{category}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
