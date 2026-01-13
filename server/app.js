const express = require("express");
const cors = require("cors")
const app = express();
// create variable to hold port number
require('dotenv').config();
const PORT = process.env.PORT || 5500;
// / json middleware file
app.use(express.json())
app.use(cors())

// import message route
const messageRoute = require("./routes/sendMessage");
app.use("/api", messageRoute);

// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });

app.get("/test", (req, res) => {
  res.send("✅ Server is running and connected!");
  
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

