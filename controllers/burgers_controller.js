var express = require("express");
//import model to use its database functions
var burger = require("../models/burger.js");
var router = express.Router();



//create routes & logic within
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            //took off s 8/5 7:47
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body.name);
    burger.create([req.body.name], function (result) {
        res.json({id: result.insertId})
    });
});

router.put("/api/burgers/:id", function (req, res) {
   
    burger.update(
        //EATEN TRUE HERE
        req.params.id, function (results) {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
           return res.status(200).end();
        }
    });
});

module.exports = router;


