const settings = require('../../settings');
const Task = require('./models/task');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect(settings.user.mLab, {
    useMongoClient: true
});

exports.notImplemented = (req, res) => {
    res.status(200).send({ message: "route not implemented yet." });
}
