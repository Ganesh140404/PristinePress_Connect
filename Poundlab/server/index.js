const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CustomerModel = require("./models/Customer");
const OrderModel = require("./models/Orders");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Customer");

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    CustomerModel.findOne({ userName: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("Wrong Password");
                }
            } else {
                res.json("No user found");
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/signUp', (req, res) => {
   // const { userName } = req.body;
    CustomerModel.findOne({ userName: req.body.userName })
        .then(existingUser => {
            if (existingUser) {
                res.json("user already exists");
            } else {
                CustomerModel.create(req.body)
                    .then(() => res.json("success"))
                    .catch(err => res.status(500).json({ error: err.message }));
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/orders', (req, res) => {
    OrderModel.create({Washing:req.body.washing,Ironing:req.body.ironing,Drycleaning:req.body.dryCleaning})
        .then(() => res.json("success"))
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(3001, () => {
    console.log("server running");
});
