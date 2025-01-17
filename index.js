import fs from "fs"; // fs gives us a lot of functions and methods that we can use them here => The NODE is based on the different modules!

const hello = "hello world";
console.log(hello);

// Blocking, Synchronous way
///////////////////////////////////////////////////////////
// How to write data into files and how to write the data from the files using 'fs' module in NODE:
// first is the path to the file that we want to read from that:
const outputAsNumbers = fs.readFileSync("./txt/input.txt"); // without assign the second parameter, it will gives us only buffers which are the numbers and we don't want them!

// Assigning the second parameter as "utf-8", we will have the TEXT as we expected!
const outputAsText = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(outputAsText);

const writeTextToFile = `This is what we know about the Avocado: ${fs.writeFileSync(
  "./txt/addEtwas.txt",
  outputAsText
)}`;

const writeTextToFile2 = `This is what we know about the Avocado: ${outputAsText}.\nCreated on ${new Date().toLocaleString()}`;

fs.writeFileSync("./txt/addEtwas.txt", writeTextToFile2);
///////////////////////////////////////////////////////////

// Non-Blocking, Asynchronous way
fs.readFile("./txt/start.txt", (err, data) => {
  err ? console.log(err) : console.log(`The data is: "${data}"`);
});
