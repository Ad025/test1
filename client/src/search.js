import { useRef, useEffect } from "react";

const handleInput = () => {
   console.log("search component seearch clicked")
   // const locationData =location;
   // fetchServerData(locationData)
 }

const AutoComplete = () => {
 const autoCompleteRef = useRef();
 const inputRef = useRef();
 const options = {
    componentRestrictions: { country: "Au" },
    fields: ["address_components", "geometry", "icon", "name"],
 };
 useEffect(() => {
  autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current,options);

  autoCompleteRef.current.addListener("place_changed", async function () {
   const place = await autoCompleteRef.current.getPlace();
   console.log(place.name);
   fetchServerData(place.name);
  }); }, []);

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
  <div>
   <label>enter address :</label>
   <p>Hiii</p>
   <input ref={inputRef} />
   <button onClick={() => handleInput()} >Search</button>
  </div>
 );
};
export default AutoComplete;