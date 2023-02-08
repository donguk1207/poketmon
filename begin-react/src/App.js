import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [poketmon , setPoketmon] = useState([]);

  useEffect(() => {
      axios({
        method:'GET',
        url:'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      }).then(reponse => console.log(reponse.data))
  })
}

export default App;
