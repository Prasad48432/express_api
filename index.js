import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

var data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Doe", age: 25 },
  { id: 3, name: "Jim Doe", age: 35 },
  { id: 4, name: "Jake Doe", age: 28 },
  { id: 5, name: "Jill Doe", age: 32 },
  { id: 6, name: "Jack Doe", age: 29 },
  { id: 7, name: "Jasmine Doe", age: 27 },
  { id: 8, name: "Jordan Doe", age: 31 },
  { id: 9, name: "Jade Doe", age: 26 },
  { id: 10, name: "Jasper Doe", age: 33 },
];

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  data.push(req.body);
  res.status(201).json(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
