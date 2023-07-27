const express = require("express");
const app = express();
const axios = require("axios");

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/external-data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch external data" });
  }
});
