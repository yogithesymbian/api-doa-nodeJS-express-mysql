"use strict";

exports.ok = function (values, res, msg, response, page, total_page) {
  var data = {
    success: true,
    message: msg,
    response,
    page: page,
    total_page: total_page,
  };
  res.json(data);
  res.end();
};
