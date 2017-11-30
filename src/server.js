const settings = require('../settings');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const timestamp = () => {
    return '[' + new Date().toLocaleString() + '] '
}

const server = express();
server.use(cors());
server.use(function (req, res, next) {
    console.log(timestamp() + req.originalUrl + ' called')
    next();
});
require('./api/routes')(server);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.listen(settings.app.port, function () {
    console.log(timestamp() + 'REST-Service listening on port ' + settings.app.port)
});

module.exports = server;
