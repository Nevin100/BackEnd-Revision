import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello world");
  }
  if (req.url == "/about") {
    res.end("Hello to About page");
  }
});

server.listen(3000, () => {
  console.log("Server is now working!!");
});
