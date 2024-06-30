const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;
const dbconf = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(dbconf);

// Cria a tabela se não existir
connection.query(
  `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `,
  (err) => {
    if (err) throw err;

    // Insere um registro na tabela
    connection.query(`INSERT INTO people(name) VALUES('Matheus')`, (err) => {
      if (err) throw err;

      connection.end();
    });
  }
);

app.get("/", (req, res) => {
  const connection = mysql.createConnection(dbconf);
  connection.query(`SELECT * FROM people`, (err, rows) => {
    if (err) throw err;

    res.send(
      `<h1>Full Cycle Rocks!</h1>
      <ul>
        ${rows.map((row) => `<li>${row.name}</li>`).join("")}
      </ul>`
    );
    connection.end();
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
