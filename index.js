const http = require("http");
const path = require("path");
const port = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  } else if (req.url === "/credits") {
    res.sendFile(path.join(__dirname, "public", "credits.html"));
  } else if (req.url === "/byeblock") {
    res.sendFile(path.join(__dirname, "public", "Byeblocker.html"));
  } else if (req.url === "/fart") {
    res.sendFile(path.join(__dirname, "public", "Fart.html"));
  } else if (req.url === "/list") {
    res.sendFile(path.join(__dirname, "public", "list.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "404.html"));
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
