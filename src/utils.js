
import Geocode from "react-geocode";
export const convertAddressToCoordintates=async(enteredAdresa)=>{
    Geocode.setApiKey("AIzaSyACWSoOTQIUtgqwpas9vEUKWN0Jg_sQ2E0");

    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();

    const noulMarker = await Geocode.fromAddress(`${enteredAdresa}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
   
        return { lat, lng }
        });
        // return {lat, lng};
      
    
    console.log("noul marker", noulMarker)
    return noulMarker
}