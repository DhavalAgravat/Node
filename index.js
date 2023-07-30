// Importing  http from node &&  custom created module
// Import type commonJS
// const http = require("http");
// const random = require("./feature");

// Import type modules
import http from "http";
import random, { random2, random3, randomGenerator } from "./feature.js";

// console.log(http);
// console.log(random);
// const randomNum = randomGenerator();
// console.log(randomNum);

// Creatng a server
// Two params at start request and response
const server = http.createServer((request, response) => {
  // Accesing request
  // This will print url at port
  //   console.log(request.url);

  // Responding with response
  // This will end request and give response of whatever we provide in argument
  // response.end("<h1>'End Response'</h1>");

  // Clubbing reuqest and response together
  // Dynamic routing based on request url

  if (request.url === "/") {
    response.end("<h1>Home</h1>");
  } else if (request.url === "/About") {
    response.end("<h1>About</h1>");
  }
  // Invoking module function and clubbing it with request reponse on server
  else if (request.url === "/Random") {
    response.end(`<h1>You're ${randomGenerator()} Stupid </h1>`);
  } else {
    response.end("<h1>Page not found</h1>");
  }
});

// Listening to server
server.listen(5000, () => {
  console.log("Listening to server");
});
