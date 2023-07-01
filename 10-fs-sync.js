const { readFileSync, writeFileSync } = require("fs");

console.log('start')

const first = readFileSync("./content/file.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the resilt : ${first}, ${second}`, {flag: 'a'}
);

console.log("Completed the task ")
console.log(`Starting the next one`)