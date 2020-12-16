const express = require("express");
const app = express();
const path = require("path");
const dataBase = require("../db/db.json");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    console.log("GET");
    res.json(dataBase);
  });
  app.post("/api/notes", (req, res) => {
    console.log("POST", req.body);
    if (dataBase) {
      dataBase.push(req.body);
      res.json(true);
    }
  });
};
