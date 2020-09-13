"use strict";

module.exports = function (app) {
  var todoList = require("../controller/controller");
  var homeDoa = require("../controller/doaController");

  app.route("/").get(todoList.index);

  app.route("/users").get(todoList.users);

  app.route("/doadetail").post(homeDoa.showDoaDetail);

  app.route("/doalist").post(homeDoa.showDoa);
};
