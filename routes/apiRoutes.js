const express = require("express");
const app = express();
const path = require("path");
let dataBase = require("../db/db.json");

console.log(dataBase);
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
  app.delete("/api/notes/:id", (req, res) => {
    console.log("DELETE", req.params.id);
    // the id of the note will be in req.params.id
    if (dataBase) {
      // use the filter array method to find the note with the id you want to delete
      dataBase = dataBase.filter((note) => {
        // return a new array that contains all notes that do not have the deleted note's id
        return note.id !== req.params.id;
      });
      res.json(true);
    }
  });
};
