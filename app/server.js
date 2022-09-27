const express = require('express');
const bodyParser = require('body-parser');
const routerApi = require('./network/routes');
const { config } = require('./config/config');
const connectDatabase = require('./db/database');

const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

connectDatabase(config.dbUrl);
routerApi(app);

app.use('/app', express.static('public')); // Serve static files

app.listen(port, () => {
    console.log('My port ' + port);
});
