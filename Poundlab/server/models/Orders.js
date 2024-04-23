const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    Washing : Number,
    Ironing : Number,
    Drycleaning : Number
});

const OrderModel = mongoose.model("Orders", OrderSchema);

module.exports = OrderModel;
