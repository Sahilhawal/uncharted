require("dotenv").config();
const express = require('express')
const app = express()
const connection = require('./db')
const users = require("./routes/users");
const auth = require("./routes/auth");
const places = require("./routes/places");


connection();
app.use(express.json())


app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/places", places);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));