const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error("Error connectant a MySQL: ", err);
        return;
    }
    console.log("Connectat a MySQL!");
});

app.get("/crearTablaUsers", (req, res) => {
    const createTable = `
        CREATE TABLE IF NOT EXISTS usuaris (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(100) NOT NULL,
            cognoms VARCHAR(100) NOT NULL
        )
    `;
    db.query(createTable, (err, result) => {
        if (err) {
            res.status(500).send("Error creant la taula: " + err);
        } else {
            res.send("Taula 'usuaris' creada o ja existeix!");
        }
    });
});

app.get("/usuaris", (req, res) => {
    db.query("SELECT * FROM usuaris", (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/usuaris", (req, res) => {
    const { nom, cognoms } = req.body;
    db.query("INSERT INTO usuaris (nom, cognoms) VALUES (?, ?)", [nom, cognoms], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id: result.insertId, nom, cognoms });
        }
    });
});

app.put("/usuaris/:id", (req, res) => {
    const { nom, cognoms } = req.body;
    const { id } = req.params;
    db.query("UPDATE usuaris SET nom = ?, cognoms = ? WHERE id = ?", [nom, cognoms, id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ id, nom, cognoms });
        }
    });
});

app.delete("/usuaris/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM usuaris WHERE id = ?", [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ message: "Usuari eliminat", id });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escoltant al port ${port}`);
});
