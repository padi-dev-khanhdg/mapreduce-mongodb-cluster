const mongoose = require("./db.context");

const accountSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    salary: Number,
    daysOff: {
        type: Number,
        default: 12
    },
    insuranceSocail: Number,
    status: {
        type: String,
        default: "inactive"
    },
    role: {
        type: String,
        default: "user",
    },
    ticket: {
        type: Number,
        min: 0,
        default: 0
    },
    version: String,
    votes: [{
        student: {
            type: String,
            ref: 'account'
        },
        comment: "",
        rate: Number
    }],
    deleteMock: Array,
    dateOfBirth: {
        type: String,
        default: Date.now()
    }
},{
    timestamps: true,
});

const AccountModel = mongoose.model("account", accountSchema);
module.exports = AccountModel;
