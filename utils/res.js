"use strict";

exports.ok = function (values, res, msg, responseName) {
  var data = {
    success: true,
    message: msg,
    data: { values },
  };
  res.json(data);
  res.end();
};
