const http = require("http");

const form = {
  title: "React is awesome",
  questions: [
    {
      question: "blahblahblah",
      options: ["aksdjfh", "asdfh", "reiry"],
    },
    {
      question: "orweor",
      options: ["czxmbvdskj", "weitunvasifh"],
    },
  ],
};

const responses = {
  id: "23489234",
  responses: [
    {},
    {
      "Question 1": "Option B",
      "Question 2": "Option A",
      "Question 3": "Option C",
    },
    {
      "Question 1": "Option C",
      "Question 2": "Option B",
      "Question 3": "Option A",
    },
  ],
};

const forms = [
  {
    id: 123,
    title: "React is awesome",
    questions: [
      {
        question: "blahblahblah",
        options: ["aksdjfh", "asdfh", "reiry"],
      },
      {
        question: "orweor",
        options: ["czxmbvdskj", "weitunvasifh"],
      },
    ],
  },
  {
    id: 123123,
    title: "React is awesome",
    questions: [
      {
        question: "blahblahblah",
        options: ["aksdjfh", "asdfh", "reiry"],
      },
      {
        question: "orweor",
        options: ["czxmbvdskj", "weitunvasifh"],
      },
    ],
  },
  {
    id: 2343625,
    title: "React is awesome",
    questions: [
      {
        question: "blahblahblah",
        options: ["aksdjfh", "asdfh", "reiry"],
      },
      {
        question: "orweor",
        options: ["czxmbvdskj", "weitunvasifh"],
      },
    ],
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/form") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(form));
  } else if (req.url === "/form/responses") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(responses));
  } else if (req.url === "/forms") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify(forms));
  } else {
    res.end("Not Found");
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
