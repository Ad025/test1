const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
