import express from "express";
import path from "path";

//* as good code practise we name our  server as 'app' in express
// const server = express();
const app = express();

//! Can directly access routes request using built in get,post etc requets in express
//! first param 'route -- endpoint to be specific', second one is callback function with request, response as params args
app.get("/", (request, response) => {
  //? send method for  response to send string in body
  // response.send("Hell Yeah");

  //! sendStatusCode -- send response status code for request
  // response.sendStatus(401);

  //* json -- can send json data file
  // response.json({ success: true, data: [{ user: "123" }, { user: "1234" }]

  //? sendFile -- can send file
  //! Cann't send path name of file this way have to use path library
  // response.sendFile("/index.html");
  const curPath = path.resolve();
  response.sendFile(path.join(curPath, "/index.html"));

  // other response methods are
  // setHeader -- can set header for request

  //! IMPORTANT
  //! We can chain response methods to do  multiple things at a time
  // response.sendStatus(500).send("test").json({ data: [] });
});

//? Example of API -- my first API --  returns dummy data
// app.get("/getMyData", (request, response) => {
//   response.json({
//     name: "Heavenly Demon",
//     address: "in Infinite Void",
//     likes: [
//       "Sweets",
//       "Revenge",
//       "Dark Humor",
//       "Lots of work",
//       "Stress",
//       "Beer & Cigarettes",
//     ],
//     dislikes: ["humans", "lies", "Dumbsters", "ShitHeads", "Cameleon"],
//   });
// });

app.listen(5000, () => {
  console.log("server is running");
});
