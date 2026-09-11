require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🚀 API Task Manager - Stage MERN Stack (Tâche 1)',
    endpoints: { tasks: '/api/tasks' },
  });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT} en mode ${process.env.NODE_ENV || 'development'}`);
});