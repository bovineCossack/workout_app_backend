const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { serverPort } = require('./config');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.send({ msg: 'Server is running' }));

// Routes go here
const exRoutes = require('./routes/v1/exerciseRoutes');

app.use('/v1/exercises', exRoutes);

app.all('*', (req, res) => res.status(404).send({ err: 'Page not found' }));

app.listen(serverPort, () => console.log(`Server is running on serverPort ${serverPort}`));
