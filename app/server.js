const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./real-time/socket');
const routerApi = require('./network/routes');
const config = require('./config/config');
const connectDatabase = require('./db/database');

connectDatabase(config.dbUrl);

app.use(cors());
app.use(bodyParser.json());
socket.connect(server);
routerApi(app);

// Serve static files
app.use(`/${config.publicRoute}`, express.static(config.staticRoute));

server.listen(config.port, () => {
    console.log('My port ' + config.port);
});
