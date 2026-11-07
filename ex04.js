// Exercise 4: Random Line from File
// Goal: read quotes.txt using a callback, split it into lines, ignore empty lines and print a random one.
// Required: fs.readFile(filePath, callback)
//
// Expected output (random on each run):
//   Random Line: Stay positive.
//
// Run: node ex04.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "quotes.txt");

// write your code here
fs.readFile(filePath, (err, data) => {
  if (err) throw err;
  const lines = data.toString().split("\n");
 const filteredLines = lines.filter(line => line.trim().length > 0);

const randomIndex = Math.floor(Math.random() * filteredLines.length)
console.log("Random Line: " + filteredLines[randomIndex]);
})
