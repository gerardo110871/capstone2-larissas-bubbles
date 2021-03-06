require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { Sequelize } = require("sequelize");
const stripe = require("stripe")(process.env.STRIPE_KEY);

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

app.post("/checkout", (req, res) => {
  const charge = stripe.charges.create(
    {
      amount: req.body.amount,
      currency: "usd",
      source: req.body.token.id,
      description: "test charge",
    },
    function (err, charge) {
      if (err) return res.sendStatus(500);
      res.sendStatus(200);
    }
  );
});

app.get("/items", (req, res) => {
  sequelize
    .query(
      `
    SELECT * FROM products
  `
    )
    .then((dbres) => {
      console.log(dbres);
      res.status(200).send(dbres);
    });
});

app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  sequelize
    .query(
      `
      INSERT INTO signup (first_name, last_name, email, password)
      VALUES('${firstName}', '${lastName}', '${email}', '${password}')
      RETURNING id, first_name, last_name, email
    `
    )
    .then((dbres) => {
      res.status(200).send(dbres);
    });
});

app.post("/cart", (req, res) => {
  console.log(req.body);
  const { id, user } = req.body;
  sequelize
    .query(
      `
      INSERT INTO cart (item_id, user_id)
      VALUES(${id}, ${user})
    `
    )
    .then(() => {
      res.status(200).send();
    });
});

app.get("/cart/:id", (req, res) => {
  const { id } = req.params;
  sequelize
    .query(
      `
      SELECT u.id, u.user_id, p.item_id, p.item, p.description, p.price, p.url 
      FROM cart u 
      JOIN products p 
      ON u.item_id = p.item_id 
      WHERE u.user_id = ${id};
  `
    )
    .then((dbres) => {
      res.status(200).send(dbres[0]);
    });
});

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
        return res.status(401).send("No User With Those Credentials");
      } else {
        console.log(dbres);
        res.status(200).send(dbres[0]);
      }
    })
    .catch((err) => res.status(401).send("No User With Those Credentials"));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  sequelize.query(`
  delete from cart
  where item_id = ${id}
  `);
});

app.listen(3333, () => console.log(`running on port 3333`));
