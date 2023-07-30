import express from "express";
import path from "path";

const app = express();

//! Use to serve static files This is middlewear
// express.static(path.join(path.resolve(), "public"));

//* To  use Middlewear we use Use methos in express
app.use(express.static(path.join(path.resolve(), "public")));

// Setting-up view engine
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  //? Render method to render ejs file
  //? Create views folder with files with extesion ejs
  //? in args of render provide file name without extensionto render it
  // response.render("index");

  //* To pass value in ejs file using render method pass second args as object to access passed values using keys
  response.render("index", { name: "Void" });
});

app.listen(5000, () => {
  console.log("server is running");
});
