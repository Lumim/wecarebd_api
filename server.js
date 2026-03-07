const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// routes
app.get("/", (req, res) => {
  res.send("WeCare API running");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});