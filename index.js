import fs from "fs"; // fs gives us a lot of functions and methods that we can use them here => The NODE is based on the different modules!

// To get the networking capabilities: import another module => http => building a http server
import http from "http";

//////////////////////////////////////SERVER SECTION////////////////////////////

// 1) Create the Server => the callback fired off each time a new request hits the server:
http.createServer((req, res) => {
  // to send back a response to the client from server:
  // Each time a new request hits our server, the call back function will be called and send a response to the user!
  res.end("Hello from the SERVER"); // .end => to send a plain text(a very simple response) to the user, when a certain request comes in!
});

// 2) Run the server to listen to incoming request:
