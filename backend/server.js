const express = require("express");
const Notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("api is running ...");
});

app.get("/api/notes", (req, res) => {
  res.json(Notes);
});

app.get("/api/notes/:id", (req, res) => {
  const notes = Notes.find((n) => n._id === req.params.id);
  res.send(notes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Listening on ${PORT}`));
