const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))


app.get("/message", (req, res) => {
  res.json({ message: "Hello frodm server!" });
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});



app.post('/api', (request,response) => {
  console.log('I got a request')
  console.log(request.body.password);
});