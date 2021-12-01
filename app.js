const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const app = express()

app.listen(8080);
app.use(bodyParser.json())
app.use('/feed', feedRoutes)