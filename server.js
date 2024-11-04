const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json(), cors());

// Inicializar la base de datos
const db = new sqlite3.Database("quick_learn.db");  

// Crear Tabla y Usuarios
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)");
    const insert = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    insert.run("estudiante1", bcrypt.hashSync("password1", 10)); // Usuario 1
    insert.run("estudiante2", bcrypt.hashSync("password2", 10)); // Usuario 2
    insert.run("estudiante2", bcrypt.hashSync("password3", 10)); // Usiario 3
    insert.finalize();
});

// Inicio de sesión
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
        if (err) return res.json({ success: false, error: "Error retrieving user" });
        if (user && bcrypt.compareSync(password, user.password)) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

// Registro de usuarios
app.post("/register", (req, res) => {
    const { username, password } = req.body;

    // Verificar si el nombre de usuario ya existe
    db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
        if (err) return res.json({ success: false, error: "Database error" });

        if (user) {
            return res.json({ success: false, message: "El usuario ya existe, intente de nuevo." });
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10);

            db.run(
                "INSERT INTO users (username, password) VALUES (?, ?)",
                [username, hashedPassword],
                function (err) {
                    if (err) {
                        return res.json({ success: false, message: "Error registering user" });
                    } else {
                        res.json({ success: true });
                    }
                }
            );
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
