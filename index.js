const express = require("express"); // Import Express
const path = require("path"); // Import path module
const app = express(); // Create an Express app
const port = process.env.PORT || 3000; // Set server port

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Route for '/' serving the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for '/credits' serving the credits.html file
app.get("/credits", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "credits.html"));
});

// Route for '/byeblock' serving the Byeblocker.html file
app.get("/byeblock", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Byeblocker.html"));
});

// Route for '/fart' serving the Fart.html file
app.get("/fart", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Fart.html"));
});

// Route for '/list' serving the list.html file
app.get("/list", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "list.html"));
});

// Route for '/game' serving the games.html file
app.get("/games", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "games.html"));
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`app listening on port ${port} at localhost:${port}`);
});
