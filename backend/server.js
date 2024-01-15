const express = require("express");
const cors = require("cors");
const userController = require("./controllers/userController");
const app = express();

app.use(cors());
app.use(express.json());

function validateToken(req, res, next) {
  const secretKey = "Anonymous";
  const token = req.header("Authorization");

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is invalid." });
  }
}

app.get("/", (req, res) => {
  res.send("<h1>Node server running</h1>");
});

app.post("/user", (req, res) => {
  const data = req.body;
  userController.userHandler(data, res);
});

app.post("/login", (req, res) => {
  const data = req.body;
  userController.loginHandler(data, res);
});

app.post("/event", (req, res) => {
  const data = req.body;
  userController.loginHandler(data, res);
});

app.listen(4000);
