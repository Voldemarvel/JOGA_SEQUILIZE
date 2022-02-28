const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true})); 

//connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

//testing connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('unable to connect to the database', err);
    });

app.get("/", (req, res) => {
    res.json({ message: "welcome to sequelize application"});
});

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
});