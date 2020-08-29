"use strict";

var response = require("../utils/res");
var connection = require("../connection/conn");

exports.showDoa = function (req, res) {
  connection.query("SELECT * FROM tbl_doa", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res, "show doa", "responseDoa");
    }
  });
};
