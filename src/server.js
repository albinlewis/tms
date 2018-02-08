const bodyParser = require('body-parser');
const settings = require('../settings');
const express = require('express');
const path = require('path');
const cors = require('cors');

const isModule = require.main !== module;

const timestamp = () => {
    return '[' + new Date().toLocaleString() + '] '
}

const server = express();
server.use(cors());
server.use(function (req, res, next) {
    if (!isModule) console.log(timestamp() + req.originalUrl + ' called')
    next();
});
server.use(express.static(path.join(__dirname, '..', 'dist')));
require('./api/routes')(server);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.listen(settings.app.port, function () {
    if (!isModule) console.log(timestamp() + 'TMS online on port ' + settings.app.port)
});

module.exports = server;
