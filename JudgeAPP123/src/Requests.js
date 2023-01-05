import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, Marker } from 'react-google-maps';
import dotenv from 'dotenv';
dotenv.config();

// issue importing google maps package

const apiKey = process.env.API_KEY;

// https://maps.googleapis.com/maps/api/js?key=apiKey

const requests = {
    fetchSkatingRinks: `"https://www.google.com/maps/search/nearby+skating+rinks/@39.9084484,-82.8768299,11z/data=!3m1!4b1?key=${apiKey}"`

}


import { GoogleMap, Marker } from 'react-google-maps';

const MyComponent = () => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [rinks, setRinks] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });

      axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=80467.2&type=skating_rink&key=${apiKey}`)
        .then(response => {
          setRinks(response.data.results);
          console.log(response.data.results)
        })
        .catch(error => {
          console.log(error)
        });
    });
  }, []);
}