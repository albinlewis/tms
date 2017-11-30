const { app, BrowserWindow } = require('electron');
const bodyParser = require('body-parser');
const settings = require('./settings');
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
require('./src/api/routes')(server);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

server.listen(settings.app.port, function () {
    console.log(timestamp() + 'REST-Service listening on port ' + settings.app.port)
});

let win;

function createWindow() {
    win = new BrowserWindow(settings.window);
    win.loadURL('file://' + __dirname + '/dist/index.html');

    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

module.exports = server;
