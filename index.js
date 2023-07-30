import express from "express";
import path from "path";

const app = express();

//! Using middlewears
app.use(express.static(path.join(path.resolve(), "public")));

//* Using urlencoded middlewear for post request
app.use(express.urlencoded({ extended: true }));

//? assume this as database for a while xD
const users = [];

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index");
});

app.get("/success", (req, res) => {
  res.render("success");
});

// API to  get form data
app.post("/", (request, response) => {
  users.push(request.body);

  //! (1) directly rendering ejs file
  // response.render("success");

  //! (2) rendering using route
  response.redirect("/success");
});

// API to show data of users
app.get("/users", (request, response) => {
  response.json({ data: users });
});

app.listen(5000, () => {
  console.log("server is running");
});
