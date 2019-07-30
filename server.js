const express = require("express");
const app = express();
const connectDB = require("./config/db");
const projects = require("./routes/projects");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/projects", projects);

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) throw err;
  console.log(`listening on port ${port}`);
});
