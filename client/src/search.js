import { useRef, useEffect } from "react";
import React,{useState} from "react";
import sendLocation from './App.js';

// const handleInput = () => {
//    console.log("search component seearch clicked")
//  }

const AutoComplete = (props) => {
 const autoCompleteRef = useRef();
 const searchInput = useRef();
 const options = {
    componentRestrictions: { country: "Au" },
    fields: ["address_components", "geometry", "icon", "name"],
 };

 const [location, setLocation] = useState(null);

 useEffect(() => {
  autoCompleteRef.current = new window.google.maps.places.Autocomplete(searchInput.current,options);
  autoCompleteRef.current.addListener("place_changed", 
  async function () {
   const place = await autoCompleteRef.current.getPlace();
   setLocation(place.name);
  }
  ); 
}, []);

console.log(location)

 
 return (
  <div>
   <p>TESTAPP</p>
   <input ref={searchInput} />
   {/* <handleInput/> */}
   <button onClick={() => props.sendLocation(location)} >Search</button>
  </div>
 );
};
export default AutoComplete;