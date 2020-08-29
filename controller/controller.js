"use strict";

var response = require("../utils/res");
var connection = require("../connection/conn");

exports.users = function (req, res) {
  connection.query("SELECT * FROM tbl_doa", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.index = function (req, res) {
  response.ok("Hello from the Node JS RESTful side!", res);
};
