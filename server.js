const express = require("express");
const cors = require("cors");
const app = express();
const { Sequelize } = require("sequelize");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

app.get('/items', (req, res) => {
  sequelize.query(`
    SELECT * FROM products
  `).then(dbres => {
    console.log(dbres);
    res.status(200).send(dbres);
  })
})

app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  sequelize.query(`
      INSERT INTO signup (first_name, last_name, email, password)
      VALUES('${firstName}', '${lastName}', '${email}', '${password}')
    `).then(() => {
      res.status(200).send({first_name: firstName, last_name: lastName, email})
    })
});

app.post("/cart", (req, res) => {
  console.log(req.body);
  const {id, user} = req.body;
  sequelize.query(`
      INSERT INTO cart (item_id, user_id)
      VALUES(${id}, ${user})
    `).then(() => {
      res.status(200).send()
    })
});

app.get('/cart', (req, res) => {
  sequelize.query(`
    SELECT * FROM cart
  `).then(() => {
    res.status(200).send()
  })
})
//WHERE id = ${}

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  sequelize
    .query(
      `
    SELECT id, first_name, last_name, email FROM signup
    WHERE email = '${email}' AND password = '${password}'
    `
    )
    .then((dbres) => {
      if (dbres[0].length === 0) {
        return res.status(401).send("Incorrect Information");
      } else {
        console.log(dbres);
        res.status(200).send(dbres[0]);
      }
    })
    .catch((err) => res.status(401).send("Incorrect Information"));
});

app.listen(3333, () => console.log(`running on port 3333`));
