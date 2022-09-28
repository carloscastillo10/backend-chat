const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./real-time/socket');
const routerApi = require('./network/routes');
const { config } = require('./config/config');
const connectDatabase = require('./db/database');

connectDatabase(config.dbUrl);

app.use(bodyParser.json());
socket.connect(server);
routerApi(app);

// Serve static files
app.use('/app', express.static('public'));

server.listen(config.port, () => {
    console.log('My port ' + config.port);
});
