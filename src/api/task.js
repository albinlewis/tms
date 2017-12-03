const settings = require('../../settings');
const Task = require('./models/task');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

if (settings.user.mLab !== null) {
    mongoose.connect(settings.user.mLab, {
        useMongoClient: true
    });
} else {
    mongoose.connect(settings.testDB, {
        useMongoClient: true
    });
}

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

exports.findAll = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (!err) {
            res.status(200).send(tasks);
        } else {
            res.status(400).send(err);
        }
    });
}

exports.findId = (req, res) => {
    Task.find({ _id: req.params.id }, (err, tasks) => {
        if (!err && tasks.length == 1) {
            res.status(200).send(tasks[0]);
        } else {
            res.status(400).send(err);
        }
    });
}

exports.update = (req, res) => {
    Task.update({ _id: req.params.id }, { $set: req.body }, (err, task) => {
        if (!err) {
            res.status(200).send(task);
        } else {
            res.status(400).send(err);
        }
    });
}

exports.delete = (req, res) => {
    Task.remove({ _id: req.params.id }, (err) => {
        if (!err) {
            res.status(200).send({});
        } else {
            res.status(400).send(err);
        }
    });
}

exports.notImplemented = (req, res) => {
    res.status(200).send({ message: "route not implemented yet." });
}
