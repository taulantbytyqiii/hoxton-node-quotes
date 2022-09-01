import express from "express";
const app = express();
const port = 4000;

type Quote = {
  age: number;
  name: string;
  lastName: string;
  id: number;
  quote: string;
};

const data: Quote[] = [
  {
    id: 1,
    age: 21,
    name: "Titus Maccius",
    lastName: "Plautus",
    quote:
      "If you have overcome your inclination and not been overcome by it, you have reason to rejoice.",
  },
  {
    id: 2,
    age: 31,
    name: "Julius",
    lastName: "Caesar",
    quote:
      "If you must break the law, do it to seize power: in all other cases observe it.",
  },
  {
    id: 3,
    age: 41,
    name: "Publius Vergalius",
    lastName: "Maro",
    quote: "Fear is proof of a degenerate mind.",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/quotes", (req, res) => {
  res.send(data);
});
app.get("/quotes/:id", (req, res) => {
  const quoteMatch = data.find((quote) => quote.id === Number(req.params.id));
  res.send(quoteMatch);
});
app.post("/quotes", (req, res) => {
  let errors = [];
  if (typeof req.body.age !== "number") {
    errors.push("The age is not a number or doesn't exist");
  }
  if (typeof req.body.name !== "string") {
    errors.push("The name is not a string or doesn't exist");
  }

  if (typeof req.body.lastName !== "string") {
    errors.push("The Last name is not a string or doesn't exist");
  }

  if (typeof req.body.quote !== "string") {
    errors.push("The quote is not a string or doesn't exist");
  }
  let newQuote = {
    name: req.body.name,
    age: req.body.age,
    id: 101,
    lastName: req.body.lastName,
    quote: req.body.quote,
  };
  res.send(newQuote);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});