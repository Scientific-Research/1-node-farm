import fs from "fs"; // fs gives us a lot of functions and methods that we can use them here => The NODE is based on the different modules!

// To get the networking capabilities: import another module => http => building a http server
import http from "http";
import url from "url";

//////////////////////////////////////SERVER SECTION////////////////////////////
import { dirname } from "path";
import { fileURLToPath } from "url";
// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1) Create the Server => the callback fired off each time a new request hits the server:
const server = http.createServer((req, res) => {
  console.log(req.url); // when i give http://127.0.0.1:8000/overview as request in the browser, i get this as req.url => /overview and /favicon.ico

  // IMPLEMENTING ROUTING => Have different responses for different routes:
  const pathName = req.url;
  //  "/" means root!

  // Overview page
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW page!");

    fs.readFile(
      `${__dirname}/templates/template-overview.html`,
      "utf-8",
      (err, data) => {}
    );

    // Product page
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT page!");

    fs.readFile(
      `${__dirname}/templates/template-product.html`,
      "utf-8",
      (err, data) => {
        
      }
    );
    // API page
  } else if (pathName === "/api") {
    // fs.readFile("./dev-data/data.json", "utf-8", (err, data) => {
    // A better version is to use __dirname instead of dot(.). in this case, it doesn't matter where you run your node, __dirname points out always to the current directory name!
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      /////////////////////////////////////////////
      // Jonas Solution
      const objectData = JSON.parse(data); // convert the JSON string to a JS object
      console.log(objectData);
      res.writeHead(200, {
        // The browser expects some JSON data => Therefore, our data would be JSON down below in our ternary operator!
        "Content-Type": "application/json",
      });

      // NOTE: The browser can display the JSON string and not the JS Object, Therefore, we have to convert the objectData as JS Object to a JSON string using JSON.stringify()
      objectData ? res.end(`${JSON.stringify(objectData)}`) : res.end(`${err}`);
      // data ? res.end(`${data}`) : res.end(`${err}`); // This is the same as above statement!

      // NOTE: The browser can not display the JS Object and can display the JSON string, that's why the below statement will not work because the objectData is a JS object
      // objectData ? res.end(`${objectData}`) : res.end(`${err}`);
      /////////////////////////////////////////////

      /////////////////////////////////////////////
      // My Solution
      // res.writeHead(200, {
      //   // The browser expects some JSON data => Therefore, our data would be JSON down below in our ternary operator!
      //   "Content-type": "text/json",
      //   "my-own-header": "hello-world",
      // });
      // data ? res.end(`${data}`) : res.end(`${err}`);
      // console.log(data);
      /////////////////////////////////////////////
    });

    // NOT FOUND PAGE
  } else {
    // res.writeHead(404, "The page not found!");
    res.writeHead(404, {
      // The browser expects some HTML file => Therefore, we write in res.end() down below a line of HTML!
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end(`<h1>The Page could not be found - 404</h1>`);
  }

  // to send back a response to the client from server:
  // Each time a new request hits our server, the call back function will be called and send a response to the user!

  // res.end("Hello from the SERVER!"); // .end => to send a plain text(a very simple response) to the user, when a certain request comes in!

  // When i want to send a REQUEST to the SERVER, I have to RELOAD the BROWSER one Time! and in this case, i get again the same RESPONSE in the BROWSER => "Hello from the SERVER!"
  // console.log(req); // to see what includes the req object!
});

// 2) Run the server to listen to incoming request from the client:
// START UP THE SERVER AND LISTENING TO THE INCOMING REQUETS:

/* 
what is nullish coalescing operator?
The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
*/

// const PORT = 0 ?? 8000; SUPPORTS ONLY NULL AND UNDEFINED!

const PORT = null || 8000; // IN ADDITION TO WHAT SUPPORT nullish coalescing operator, OR SUPPORTS false AND NaN TOO!

//NOTE: only when the left-hand is null o undefined returns the right-hand operator but OR || supports the NaN and false values too => THTA'S WHY IS THE BEST TO USE OR INSTEAD OF ?? Operator!

// server.listen(PORT, "127.0.0.1", () => { "127.0.0.1" is DEFAULT and we don't need even to mention it!
server.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}...`);
});

// THE ANSWER FROM THE SERVER USING LOCAL IP ADDRESS IN THE BROWSER: http://127.0.0.1:3000/ => Hello from the SERVER!
