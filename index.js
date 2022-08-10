const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./route/users.route');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('Hello from BG.'));

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));
