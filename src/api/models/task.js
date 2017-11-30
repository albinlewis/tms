const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task Model
const taskSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
    active:{
        type: Boolean,
        default: false
    },
    visible:{
        type: Boolean,
        default: true
    },
    done:{
        type: Boolean,
        default: false
    },
    interval:{
        type: JSON,
        default: {hasInterval: false, value: 0, unit: null}
    }
});

module.exports = mongoose.model('Task', taskSchema);
