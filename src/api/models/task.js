const settings = require('../../../settings');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "no description provided"
    },
    notes: {
        type: Array,
        default: []
    },
    interval: {
        type: JSON,
        default: {
            hasInterval: false,
            value: 0,
            unit: null
        }
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    visible: {
        type: Boolean,
        default: true
    },
    active: {
        type: Boolean,
        default: false
    },
    done: {
        type: Boolean,
        default: false
    },
    time: {
        type: Number,
        default: 0
    }
});

let collectionName = 'tests';
if (settings.user.name !== null) collectionName = settings.user.name;
module.exports = mongoose.model('Task', taskSchema, collectionName);
