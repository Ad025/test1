import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/message")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, []);
  



  async function fetchServerData() {
    const data = {
      "email" : "dekhd",
      "password": 23434,
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
        
      </header>
    </div>
  );
}

export default App;
