import react, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { convertAddressToCoordintates } from "../../utils";
// import classes from './harta.module.css';

function initMap(param) {
    const myLatLng = { lat: 44.4234633061 , lng: 26.1013029281 };
    const mapElement = document.getElementById("map");

    const map = new window.google.maps.Map(mapElement, {
        zoom: 12,
        center: myLatLng,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#(17263c" }],
            },
        ],
    });

//     console.log("locations", locations)
    
//    locations.forEach(async(location, i)=>{

//     console.log("position",  await convertAddressToCoordintates(location.address) )
    
    for(let i=0;i<param.length;i++){
        new window.google.maps.Marker({
    
            position: param[i],
            map,
            label: `${i + 1}`,

        })
    }
    

}

const Harta = (props) => {
    const mapRef = useRef();
    useEffect(() => { initMap(props.markere) }, [props.markere]);
    return <>
        <div id='map' ref={mapRef}></div>
    </>
}

export default Harta;