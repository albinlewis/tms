const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

module.exports = function (server) {

    const task = require('./task');
    const prfx = '/api/tasks';

    server.post(prfx + '/create', jsonParser, task.notImplemented);
    server.get(prfx + '/find/all', task.notImplemented);
    server.get(prfx + '/find/:id', task.notImplemented);
    server.put(prfx + '/update/:id', jsonParser, task.notImplemented);
    server.delete(prfx + '/delete/:id', task.notImplemented);
    
}
