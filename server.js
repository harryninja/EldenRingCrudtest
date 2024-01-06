const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.static(__dirname + "/src"));

app.use(express.urlencoded({ extended: true }));

const db = require("./api/models");

app.get("/", (req, res) => {
  res.json({ message: "Bem vindo" });
});

require("./api/routes/routes")(app);
db.sequelize.sync();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
