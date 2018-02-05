const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

module.exports = function (server) {

    const task = require('./task');

    server.post('/api/tasks/create', jsonParser, task.create);
    server.get('/api/tasks/find/all', task.findAll);
    server.get('/api/tasks/find/:id', task.findId);
    server.put('/api/tasks/update/:id', jsonParser, task.update);
    server.delete('/api/tasks/delete/:id', task.delete);

    const mail = require('./mail');
    server.post('/api/mails/send', jsonParser, mail.sendMail);

}
