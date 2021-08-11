const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title: String,
    status: String,
    nickname: String,
    roles: String,
})

const userSchema = mongoose.Schema({
    title: String,
    first: String,
    last: String,
    suffix: String,
    nickname: String,
    email: String,
    password: String,
    phone: String,
    birthday: Date,
    deceased: Boolean,
    joined: Number,
    sponsor: String,
    status: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    spouse: {
        title: String,
        first: String,
        last: String,
        nickname: String,
        email: String,
        password: String,
        phone: String,
        birthday: Date,
        deceased: Boolean, 
        currentJobs: [ jobSchema ],
        jobHistory: [ jobSchema ]
    },
    children: [
        {
            first: String,
            last: String,
            birthday: Date,
        }
    ],
    currentJobs: [ {
        job: jobSchema,
    }
     ],
    jobHistory: [ {
        job: jobSchema,
        year: Number,
    }],
    roles: String,
    image: String,
})

module.exports = mongoose.model('User', userSchema);