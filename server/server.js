const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const app = express();

// Configs (hardcoded)
const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/fitnessTrackerDB';
const JWT_SECRET = 'secretkey123';

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => {
    console.error('MongoDB connection failed ❌', err);
    process.exit(1);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Attach secret manually to every request
app.use((req, res, next) => {
  req.JWT_SECRET = JWT_SECRET;
  next();
});

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is working! 🧠🔥');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT} 🚀`));
