const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
let aut = [];

app.post("/dodajAutora", (req, res) => {
  var data = req.body;
  console.log(data.naziv);

  if (!data.naziv || !data.work) {
    res.json({
      Error: "Krivi kljucevi",
    });
  } else {
    for (h in data.work) {
      if (data.work[h].length > 20) {
        res.json({
          Error: "Djelo: " + data.work[h] + " > od 20 znakova",
        });
      }
    }
    data = { ...data, id: uuidv4(), datum: Date() };
    aut.push(data);
    res.send(aut);
  }
});

app.get("/vratiAutore", (req, res) => {
  res.send(aut);
});

app.delete("/izbrisiDjeloAutora/:id/:work", (req, res) => {
  var { id } = req.params;
  var { work } = req.params;

  for (k in aut) {
    if (aut[k].id == id) {
      aut[k].works = aut[k].works.filter((x) => x != work);
    }
  }

  console.log(aut);

  res.send(aut);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
