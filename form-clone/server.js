const http = require("http");
const port = 5000;
const host = "localhost";
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/form") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const temp = {
      title: "Untitled",
      fields: [
        { question: "Question1?", options: ["A", "B", "Q", "D", "R"] },
        { question: "Question2?", options: ["A", "B", "P", "D"] },
        { question: "Question3?", options: ["A", "F", "C"] },
        { question: "Question4?", options: ["A", "D"] },
      ],
      response: {
        count: 0,
        responses: [
          [1, 2, 3, 4, 1],
          [4, 1, 2, 3],
          [4, 3, 0],
          [1, 6],
        ],
      },
    };
    res.end(JSON.stringify(temp));
  } else {
    res.end("404 not found");
  }
});

server.listen(port, (req, res) => {
  console.log("server ready");
});
