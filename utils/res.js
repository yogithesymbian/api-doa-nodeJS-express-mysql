"use strict";

exports.ok = function (values, res, msg, response) {
  var data = {
    success: true,
    message: msg,
    response,
  };
  res.json(data);
  res.end();
};
