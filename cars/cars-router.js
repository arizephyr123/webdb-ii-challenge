const express = require("express");
const db = require("../data/dbConfig.js");

const router = express.Router();

//create car
router.post("/", (req, res) => {
  db("carsData")
    .insert(req.body, "id")
    .then(response => {
      res.status(201).json(response);
    });
});

//read single car
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("carsData")
    .where({ id })
    .then(car => {
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(400).json({ message: `No car with id ${id}.` });
      }
    })
    .catch(err => {
      const { id } = req.params;
      console.log("Get all cars error:", err, id);
      res
        .status(500)
        .json({ message: `Database Error getting car with id ${id}.` });
    });
});

//read all cars
router.get("/", (req, res) => {
  db("carsData")
    .then(cars => {
      if (cars) {
        res.status(200).json(cars);
      } else {
        res.status(200).json({ message: "No cars to display." });
      }
    })
    .catch(err => {
      console.log("Get all cars error:", err);
      res.status(500).json({ message: "Database Error getting cars" });
    });
});

module.exports = router;
