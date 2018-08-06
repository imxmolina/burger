//import mysql connection 
var connection = require("../config/connection.js");

// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }

//     return arr.toString();
//   }

// //   // Helper function to convert object key/value pairs to SQL syntax
// //   function objToSql(ob) {
//     var arr = [];

//     // loop through the keys and push the key/value as a string int arr
//     for (var key in ob) {
//       var value = ob[key];
//       // check to skip hidden properties
//       if (Object.hasOwnProperty.call(ob, key)) {
//         // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//           value = "'" + value + "'";
//         }
//         // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//         // e.g. {sleepy: true} => ["sleepy=true"]
//         arr.push(key + "=" + value);
//       }
//     }

//     // translate array of strings to a single comma-separated string
//     return arr.toString();
//   }


//object for all sql statement functions
var orm = {
   selectAll: function (cb) {
       var queryString = "SELECT * FROM burgers;";
       connection.query(queryString, function (err,res){
           if (err) throw err;
           cb(res);
       })
   },
    update: function (condition, cb) {
        var queryString = "UPDATE burgers SET eaten = 1 WHERE id = " + condition + ";";
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    create: function (name, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (" + "'" + name + "'" + "); "

        console.log(queryString);

        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    }


};

//export orm object for model 
module.exports = orm;