const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const personRoutes = require('./routes/personRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api',personRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/personDB')
    .then(() => console.log('MongoDB tilsluttet!'))
    .catch(err => console.error('MongoDB fejl:', err));

app.listen(port, () => console.log('Server kører på http://localhost:3000'));
