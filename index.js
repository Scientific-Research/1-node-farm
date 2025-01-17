import fs from "fs"; // fs gives us a lot of functions and methods that we can use them here => The NODE is based on the different modules!

// To get the networking capabilities: import another module => http => building a http server
import http from "http";

//////////////////////////////////////SERVER SECTION////////////////////////////

// 1) Create the Server => the callback fired off each time a new request hits the server:
const server = http.createServer((req, res) => {
  // to send back a response to the client from server:
  // Each time a new request hits our server, the call back function will be called and send a response to the user!
  res.end("Hello from the SERVER!"); // .end => to send a plain text(a very simple response) to the user, when a certain request comes in!

  // When i want to send a REQUEST to the SERVER, I have to RELOAD the BROWSER one Time! and in this case, i get again the same RESPONSE in the BROWSER => "Hello from the SERVER!"
  // console.log(req); // to see what includes the req object!
});

// 2) Run the server to listen to incoming request from the client:
// START UP THE SERVER AND LISTENING TO THE INCOMING REQUETS:
const PORT = 3000;
// server.listen(PORT, "127.0.0.1", () => { "127.0.0.1" is DEFAULT and we don't need even to mention it!
server.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}...`);
});

// THE ANSWER FROM THE SERVER USING LOCAL IP ADDRESS IN THE BROWSER: http://127.0.0.1:3000/ => Hello from the SERVER!
