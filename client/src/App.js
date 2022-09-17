import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import AutoComplete from './search.js';

function App() {
  const [data, setData] = React.useState(null);
  const [location, setLocation] = useState(null);

  const handleInput = () => {
    const locationData =location;
    fetchServerData(locationData)
  }

  React.useEffect(() => {
    fetch("/message")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []);

  console.log(data)

  async function fetchServerData(locationData) {
    // const locationData = "towsville"
    const data = {
      "location": locationData,
    };
    const options ={
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'text/plain'
      },
      body: JSON.stringify(data)
    }

    fetch('/api', options);
    console.log(data)
  }

  fetchServerData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AutoComplete />
        <input placeholder="location..." onChange={e => setLocation(e.target.value)}></input>
        <button onClick={() => handleInput()} >Search</button>
        <button></button>
      </header>
    </div>
  );
}

export default App;
