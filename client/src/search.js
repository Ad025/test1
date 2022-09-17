import { useRef, useEffect } from "react";

const AutoComplete = () => {
 const autoCompleteRef = useRef();
 const inputRef = useRef();
 const options = {
    componentRestrictions: { country: "Au" },
    fields: ["address_components", "geometry", "icon", "name"],
 };
 useEffect(() => {
  autoCompleteRef.current = new window.google.maps.places.Autocomplete(
   inputRef.current,
   options
  );
  autoCompleteRef.current.addListener("place_changed", async function () {
   const place = await autoCompleteRef.current.getPlace();
   console.log(place.name);
  });


 }, []);
 return (
  <div>
   <label>enter address :</label>
   <p>Hiii</p>
   <input ref={inputRef} />
  </div>
 );
};
export default AutoComplete;