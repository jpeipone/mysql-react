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
  database: "uusiala",
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

app.get("/koodari", (req, res) => {
  const q = "SELECT * FROM koodari";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(7700, () => {
  console.log("Connect to backend.");
});
