const mysql = require("mysql");

const pledgeSchema = new Schema({
    name: String,
    zipCode: String,
    nonProfits: Number,
    smallBusinesses: Number
});

const Pledge = 

exports.createPledge = (pledgeData) => {
    const pledge = new Pledge(pledgeData);
};