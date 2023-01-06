import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, Marker } from 'react-google-maps';
import '../../styles/maps.css'

export default function Map() {


  const apiKey = process.env.API_KEY;
  

  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [rinks, setRinks] = useState([]);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(position => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
  
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=5000&type=skating_rink&key=${apiKey}`)
          .then(response => {
            setRinks(response.data.results);
          })
          .catch(error => {
            // handle error
          });
      });
    }, []);

      return (
        <div className='map'>
        <GoogleMap
          defaultZoom={12}
          defaultCenter={center}
          containerElement={<div style={{ height: `400px`, width: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          googleMapURL={`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=5000&type=skating_rink&key=${apiKey}`}
        />
      </div>
      );
    };