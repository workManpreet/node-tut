const htttp = require("http");

//req represent incoming request , res response
const server = htttp.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is all about ABOUT");
  }
  res.end(`<h1> OOPs!</h1>
   <p> No content for the requested URL </p>
   <a href='/'> Back Home</a>`);
});

server.listen(5000);
