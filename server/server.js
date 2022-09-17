//Requires Express and allows us to use it inside our server.js file.
const express = require("express");
const app = express();
const fetch = require('node-fetch');
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))

//Set the Express server on which port to run on. 
const PORT = process.env.PORT || 5001;
// const url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=b13dca06fad2516ab926e2946e70545e";
// const city = setLocation;
const url = "https://api.openweathermap.org/data/2.5/forecast?q=";
const currentWeather = "https://api.openweathermap.org/data/2.5/weather?q="

//will display a message on the console that the server is working as expected.
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.post('/api', (request,response) => {
  console.log('I got a request')
  console.log(request.body.location);
  setLocation = request.body.location;
  // fetchOpenWeather(setLocation)
  const url =  `${currentWeather}${setLocation},australia&appid=b13dca06fad2516ab926e2946e70545e&units=metric`
  console.log(url);
  fetch(url)
  .then((response) => response.json())
  .then((data) => response.json(data));

});
