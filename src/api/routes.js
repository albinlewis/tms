const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

module.exports = function (server) {

    const task = require('./task');
    const prfx = '/api/tasks';

    server.post(prfx + '/create', jsonParser, task.create);
    server.get(prfx + '/find/all', task.findAll);
    server.get(prfx + '/find/:id', task.findId);
    server.put(prfx + '/update/:id', jsonParser, task.update);
    server.delete(prfx + '/delete/:id', task.delete);

}
