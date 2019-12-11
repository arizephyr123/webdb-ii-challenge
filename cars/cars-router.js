const express = require('express');
const db = require("../data/dbConfig.js");

const router = express.Router();

//create car
router.post("/", (req, res)=> {
db("cars")
.insert(req.body, "id")
.then(response => {
    res.status(201).json(response)
})
})


//read single car

//read all cars


module.exports = router;

