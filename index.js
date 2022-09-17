const express = require("express");
const mysql = require("mysql");

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inow_rodrigo",
});

// RUTAS
app.get("/", (req, res) => {
  res.send("hola");
});
app.get("/usuarios", (req, res) => {
  const sql = "SELECT * from acreditacion";
  connection.query(sql, function (error, results) {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay resultado");
    }
  });
});

connection.connect((error) => {
  if (error) {
    console.log("error ", error);
  } else {
    console.log("no hay error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
