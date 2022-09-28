const express = require('express');
const bodyParser = require('body-parser');
const routerApi = require('./network/routes');
const { config } = require('./config/config');
const connectDatabase = require('./db/database');

var app = express();
connectDatabase(config.dbUrl);

app.use(bodyParser.json());
routerApi(app);

// Serve static files
// app.use('/app', express.static('public'));

app.listen(config.port, () => {
    console.log('My port ' + config.port);
});
