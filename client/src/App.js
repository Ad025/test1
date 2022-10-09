import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import AutoComplete from "./search.js";

function App() {
  const [data, setData] = React.useState(null);
  const [location, setLocation] = useState(null);
  const [word, setWord] = useState("word usestate");

  const handleInput = (props) => {
    const locationData = location;
    // console.log(props.location);
    fetchServerData(locationData);
  };

  React.useEffect(() => {
    fetch("/message")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  console.log(data);

  async function fetchServerData(locationData) {
    // const locationData = "towsville"
    const data = {
      location: word,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'text/plain'
      },
      body: JSON.stringify(data),
    };

    fetch("/api", options);
    console.log(data);
  }

  fetchServerData();

  return (
    <div className="App">
      <div className="container-scroll y mandatory-scroll-snapping">
        <section className="test">Y Mand. LTR</section>

        <section className="test">2</section>
      </div>
    </div>
  );
}

export default App;
