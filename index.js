//* Importing  http from node &&  custom created module
// Import type commonJS
// const http = require("http");
// const random = require("./feature");

//! Import type modules
import http from "http";
import random, { random2, random3, randomGenerator } from "./feature.js";
//? fs -- used for file manipulation
import fs from "fs";
//? path --  used for read extension of pathh file and dir and other url file related things
import path from "path";

// console.log(http);
// console.log(random);
// const randomNum = randomGenerator();
// console.log(randomNum);

//! Read file using  fs (Async)
//! First parameter of argument is file path an d second is callack function which will make this function async

// const homeFile = fs.readFile("./index.html", () => {
//   console.log("file read");
// });
// console.log(homeFile);

//* Read file using  fs (Sync)
//* readFileSync make it synchronous course of action
// const homeFile = fs.readFileSync("./index.html");

//! Creatng a server
//! Two params at start request and response
const server = http.createServer((request, response) => {
  //? Accesing request
  //? This will print url at port
  // console.log(request.url);

  //* Responding with response
  //* This will end request and give response of whatever we provide in argument
  // response.end("<h1>'End Response'</h1>");

  //! Clubbing reuqest and response together
  //! Dynamic routing based on request url

  if (request.url === "/") {
    //? Normal response
    response.end("<h1>Home</h1>");

    //! Clubbing response with fs library and file reading functionality
    // Async flow of actions
    // For callback functionn of readfile first argument is error and second one is data  we get fromm file
    // fs.readFile("./index.html", (error, data) => {
    //   response.end(data);
    // });

    //* Response of read file using readFileSync operation
    // response.end(homeFile);

    //? Reading method of  request at particular endpoint
    //? 4 Methods - Get,Post,Put,Delete
    const req = request.method;
    console.log(req);
  } else if (request.url === "/About") {
    response.end("<h1>About</h1>");
  }
  //! Invoking module function and clubbing it with request reponse on server
  else if (request.url === "/Random") {
    response.end(`<h1>You're ${randomGenerator()} Stupid </h1>`);
  } else {
    response.end("<h1>Page not found</h1>");
  }
});

//! Listening to server
server.listen(5000, () => {
  console.log("Listening to server");
});
