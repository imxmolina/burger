var db = require("../models");

module.exports = function (app) {


    //create routes & logic within
    app.get("/", function (req, res) {

        db.Burger.findAll().then(function (result) {
            var hbsObject = {
                burger: result
            }
            res.render("index", hbsObject)
        })
    })

    app.post("/api/burgers", function (req, res) {
        console.log(req.body.name);
        db.Burger.create({ burger_name: req.body.name }).then(function (results) {
            res.json(results)
        })
    })

    app.put("/api/burgers/:id", function (req, res) {

        db.Burger.update(

            {eaten: req.body.eaten},
            {
                where: {
                    id: req.params.id
                }
            }).then(function (results){
                res.json(results)
            })
    })





}

