const express = require('express');
const parser = require('body-parser');
const db = require("../database")

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get("/allPokemon", (req, res) => {
  db.getAllPokemon((err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send("error retrieving pokemon");
    } else{
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});