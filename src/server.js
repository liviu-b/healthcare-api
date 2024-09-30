require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');
const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/patients', patientRoutes);
app.use(requestLogger);  // Apply request logger to all incoming requests
app.use(errorHandler);  // Use error handler after all routes

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
    res.send('HealthTech API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
