const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nohp: {
        type: String,
        required: true
    },
    univ: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', UserSchema);
