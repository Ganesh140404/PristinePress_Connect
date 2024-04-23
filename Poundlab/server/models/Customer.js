const mongoose = require("mongoose");


const CustomerSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String
})

const CustomerModel = mongoose.model("Customers", CustomerSchema)

module.exports = CustomerModel