const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

module.exports = function (server) {

    const task = require('./task');
    const prefix = '/api/tasks';

    server.post(prefix + '/create', jsonParser, task.create);
    server.get(prefix + '/find/all', task.findAll);
    server.get(prefix + '/find/:id', task.findId);
    server.put(prefix + '/update/:id', jsonParser, task.update);
    server.delete(prefix + '/delete/:id', task.delete);

}
