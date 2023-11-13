// server.js
const express = require("express"); // Import Express
const app = express(); // Create an Express app
const path = require("path"); // Import path module
const port = process.env.PORT || 3000; // Set server port

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Route for '/' serving the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/credits", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "credits.html"));
});

app.get("/byeblock", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Byeblocker.html"));
});

app.get("/fart", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Fart.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`app listeing on port 3000 at http://localhost:${port}`);
});
