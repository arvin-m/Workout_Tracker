const express = require("express");
const router = express.Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then((data) => {
        console.log("Table crated (DATA) !", data)
        res.json(data);
    }).catch(err => res.json(err));

});
router.put("/api/workouts/:id", (req, res) => {

    Workout.update(
        { _id: req.params.id },
        { $push: { exercises: req.body } })
        .then((data) => {
        res.json(data);
    }).catch(err => res.json(err));

});
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then((data) => {
        res.json(data);
        console.log("DATA Stats ", data);
    }).catch(err => res.json(err));
});

router.get("/api/workouts",(req,res)=>{
    Workout.find().then((data)=>{
        res.json(data)

    }).catch(err => res.json(err));
});










module.exports = router;