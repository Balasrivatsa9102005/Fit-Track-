import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "../styles/CalendarPage.css";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [workouts] = useState([
    {
      id: 1,
      title: 'Leg Day (Squats)',
      start: new Date(2024, 6, 8, 10, 0),
      end: new Date(2024, 6, 8, 11, 30),
      calories: 850,
      type: 'legs',
      details: 'Squats 4x12, Deadlifts 3x10'
    },
    {
      id: 2,
      title: 'Upper Body',
      start: new Date(2024, 6, 8, 16, 0),
      end: new Date(2024, 6, 8, 17, 15),
      calories: 720,
      type: 'upper',
      details: 'Bench Press 4x8, Rows 3x10'
    },
    {
      id: 3,
      title: 'Morning Run',
      start: new Date(2024, 6, 9, 7, 0),
      end: new Date(2024, 6, 9, 7, 45),
      calories: 550,
      type: 'cardio',
      details: '5km run, avg pace 5:30/km'
    },
    {
      id: 4,
      title: 'Full Body',
      start: new Date(2024, 6, 10, 9, 0),
      end: new Date(2024, 6, 10, 10, 30),
      calories: 900,
      type: 'full',
      details: 'Circuit training: 3 rounds'
    }
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  // Colors for workout types
  const typeColors = {
    legs: '#FF6B6B',
    upper: '#4ECDC4',
    cardio: '#45B7D1',
    full: '#A379C9',
    mixed: '#8884d8'
  };

  // Check if multiple types on same date
  const getColorForEvent = (event) => {
    const sameDayEvents = workouts.filter(w =>
      moment(w.start).isSame(event.start, 'day')
    );
    const uniqueTypes = new Set(sameDayEvents.map(w => w.type));
    return uniqueTypes.size > 1 ? typeColors.mixed : typeColors[event.type];
  };

  // Styling each event
  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: getColorForEvent(event),
        borderRadius: '4px',
        opacity: 0.9,
        color: 'white',
        border: '0px',
        padding: '4px',
        fontSize: '0.85rem'
      }
    };
  };

  // Custom toolbar to add month/year navigation
  const CustomToolbar = ({ label, onNavigate }) => {
    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button type="button" onClick={() => onNavigate('TODAY')}>Today</button>
          <button type="button" onClick={() => onNavigate('PREV')}>&lt;</button>
          <button type="button" onClick={() => onNavigate('NEXT')}>&gt;</button>
        </span>
        <span className="rbc-toolbar-label">{label}</span>
        <span className="rbc-btn-group">
          <button type="button" onClick={() => setCurrentDate(new Date())}>
            Current Month
          </button>
        </span>
      </div>
    );
  };

  return (
    <div className="calendar-page">
      <h1 className="calendar-title">Workout Calendar</h1>
      
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={workouts}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          eventPropGetter={eventStyleGetter}
          views={['month', 'week', 'day', 'agenda']}
          defaultView="month"
          date={currentDate}
          onNavigate={(date) => setCurrentDate(date)}
          onSelectEvent={(event) => setSelectedEvent(event)}
          components={{
            toolbar: CustomToolbar,
            event: ({ event }) => (
              <div className="calendar-event">
                <div className="event-title">{event.title}</div>
                <div className="event-calories">{event.calories} kcal</div>
              </div>
            )
          }}
        />
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="event-modal">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setSelectedEvent(null)}
            >
              &times;
            </button>
            <h3>{selectedEvent.title}</h3>
            <div className="event-time">
              {moment(selectedEvent.start).format('MMMM Do YYYY, h:mm a')} - 
              {moment(selectedEvent.end).format('h:mm a')}
            </div>
            <div className="event-stats">
              <div>
                <span className="stat-label">Calories:</span>
                <span className="stat-value">{selectedEvent.calories} kcal</span>
              </div>
              <div>
                <span className="stat-label">Duration:</span>
                <span className="stat-value">
                  {moment.duration(moment(selectedEvent.end).diff(selectedEvent.start)).asMinutes()} mins
                </span>
              </div>
              <div>
                <span className="stat-label">Type:</span>
                <span 
                  className="stat-value"
                  style={{ color: typeColors[selectedEvent.type] }}
                >
                  {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                </span>
              </div>
            </div>
            <div className="event-details">
              <h4>Workout Details:</h4>
              <p>{selectedEvent.details}</p>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="calendar-legend">
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: color }}></span>
            <span>{type.charAt(0).toUpperCase() + type.slice(1)} Workouts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;