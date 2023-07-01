const { readFile, writeFile } = require("fs");

readFile("./content/file.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `\n Here is the resilt : ${first}, ${second}`,
      { flag: "a" },
      (err,
      (result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Done with this task ');
      })
    );
  });
})
console.log('Starting the new task')
