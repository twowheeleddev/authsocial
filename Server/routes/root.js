const express = require("express");
const router = express.Router();
const path = require("path");

// Route to serve the index.html file for the root and /index routes
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"), (err) => {
    if (err) {
      console.error(`Error serving index.html: ${err.message}`);
      res.status(500).send("Internal Server Error");
    }
  });
});

module.exports = router;
