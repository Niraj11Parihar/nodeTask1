const http = require("http");

const fs = require("fs");
const port = 8081;

const reqhandler = (req, res) => {
  let fileName = " ";

  switch (req.url) {
    case "/":
      fileName = "./home.html";
      break;
    case "/about":
      fileName = "./about.html";
      break;
    case "/contact":
      fileName = "./contact.html";
      break;
    default:
      fileName = "./error.html";
      break;
  }
  fs.readFile(fileName, (err, result) => {
    if (!err) {
      res.end(result);
    }
  });
};



const server = http.createServer(reqhandler);

server.listen(port, (err) => {
  if (err) {
    console.log("server not start in port.");
    return false;
  }
  console.log("server start in port:-" + port);
});
