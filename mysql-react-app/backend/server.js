/* import express from "express";
import mysql from "mysql";
import cors from "cors"; */
//guide: https://medium.com/@vishnukvka/crud-app-using-react-and-mysql-ddf19f032b40

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blorb",
});

app.use(express.json());
app.use(cors());

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database");
    return;
  }
  console.log("Connected");
});

app.get("/people", (req, res) => {
  const q = "SELECT * FROM people";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(7700, () => {
  console.log("Connect to backend.");
});

//put == update people
app.put("/people/:id", (req, res) => {
  const { id } = req.params;

  const { NameP, Phone, Email } = req.body;

  const sqlPut =
    "UPDATE people SET  NameP = ?, Phone = ?, Email = ? WHERE PeopleId = ?";

  db.query(
    sqlPut,

    [NameP, Phone, Email, id],

    function (error, results) {
      if (error) throw error;

      db.query("SELECT * FROM people WHERE PeopleId=?", id, (err, rows) => {
        if (err) throw err;

        res.end(JSON.stringify(rows[0]));
      });
    }
  );
});

app.delete("/deletePeople/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  db.query(
    "DELETE FROM people WHERE PeopleId = ?",
    [id],

    function (error, results) {
      if (error) throw error;

      return;
    }
  );
});

//add people
app.post("/addPerson", (req, res) => {
  const { NameP, Phone, Email } = req.body;
  const sqlPostPeople =
    "INSERT INTO people (NameP, Phone, Email) VALUES (?,?,?)";

  db.query(sqlPostPeople, [NameP, Phone, Email], (error, result) => {
    if (error) {
      console.error("Error adding people", error);
    } else {
      console.log("added new people");
    }
  });
});
