const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);

  if (req.url === "/") {
    res.end("Welcm to homepage");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }

  res.end(
    `<h1> oops!</h1>
     <p>no page </p>
    <a href='/'>back home </a>
     
     `
  );
});

server.listen(5000);
