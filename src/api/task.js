const settings = require('../../settings');
const Task = require('./models/task');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let mLabInstance = settings.testDB;
if (settings.user.mLab !== null) mLabInstance = settings.user.mLab;
mongoose.connect(mLabInstance, {
    useMongoClient: true
});

/**
 * handler for POST /create route
 * 
 * creates a new Task object from the sent request body
 * and inserts it into the mongoDB
 * 
 * [requires a JsonParser object]
 * 
 * @param {*} req client request 
 * - body should contain a JSON Object that can be used to create a Task Object [see src/api/models/task.js]
 * @param {*} res server response
 * - statuscode:200 and the newly created Task object
 * - statuscode:400 and an error object
 */
exports.create = (req, res) => {
    let task = new Task(req.body);
    task.save(task, (err, newTask) => {
        if (!err) {
            res.status(200).send(newTask);
        } else {
            res.status(400).send(err);
        }
    });
}

/**
 * handler for GET /find/all route
 * 
 * finds and returns all Task objects from the database if there are any
 * 
 * @param {*} req client request 
 * @param {*} res server response
 * - statuscode:200 and an array of all Task objects in the database
 * - statuscode:400 and an error object
 */
exports.findAll = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (!err) {
            res.status(200).send(tasks);
        } else {
            res.status(400).send(err);
        }
    });
}

/**
 * handler for GET /find/id route
 * 
 * finds and returns the requested Task object from the database if it exists
 *  
 * @param {*} req client request 
  * - params should contain a Task _id to find the required Task in the database
 * @param {*} res server response
 * - statuscode:200 and the requested Task object
 * - statuscode:400 and an error object
 */
exports.findId = (req, res) => {
    Task.find({ _id: req.params.id }, (err, tasks) => {
        if (!err && tasks.length == 1) {
            res.status(200).send(tasks[0]);
        } else {
            res.status(400).send(err);
        }
    });
}

/**
 * handler for PUT /update route
 * 
 * finds and updates a Task object from the database with supplied request body
 * 
 * [requires a JsonParser object]
 *  
 * @param {*} req client request 
 * - params should contain a Task _id to find the required Task in the database
 * - body should contain all fields of the Task object that have to be updated
 *   (fields that stay the same can be ommitted)
 * @param {*} res server response
 * - statuscode:200 and and the updated Task object
 * - statuscode:400 and an error object
 */
exports.update = (req, res) => {
    Task.update({ _id: req.params.id }, { $set: req.body }, (err, task) => {
        if (!err) {
            res.status(200).send(task);
        } else {
            res.status(400).send(err);
        }
    });
}

/**
 * handler for DELETE /delete route
 * 
 * finds and deletes a Task object from the database
 *  
 * @param {*} req client request 
 * - params should contain a Task _id to find the required Task in the database
 * @param {*} res server response
 * - statuscode:200 and an empty JSON object
 * - statuscode:400 and an error object
 */
exports.delete = (req, res) => {
    Task.remove({ _id: req.params.id }, (err) => {
        if (!err) {
            res.status(200).send({});
        } else {
            res.status(400).send(err);
        }
    });
}
