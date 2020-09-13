"use strict";

var response = require("../utils/res");
var connection = require("../connection/conn");

exports.showDoa = function (req, res) {
  let page = req.body.page;
  // total page
  connection.query("SELECT COUNT(id) AS total_page FROM tbl_doa", function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      let total_page = rows[0].total_page.toString().substr(0, 1);
      let sql = "SELECT * FROM tbl_doa WHERE id <=" + page * 10;
      // show data
      connection.query(sql, function (error, rows, fields) {
        if (error) {
          console.log(error);
        } else {
          const resData = {
            listDoa: rows, // data obj
          };
          let total_pages = parseInt(total_page) + 1; // page temporary
          response.ok(
            rows, // todo
            res,
            "show doa listDoa",
            resData,
            page,
            total_pages.toString()
          );
        }
      });
    }
  });
};

exports.showDoaDetail = function (req, res) {
  let sql = "SELECT * FROM tbl_doa_det WHERE tbl_doa_id=" + req.body.tbl_doa_id;
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    const resData = {
      DoaDetail: rows, // data obj
    };
    response.ok(
      rows, // todo
      res,
      "show doa listDoaDetail",
      resData
    );
  });
};
