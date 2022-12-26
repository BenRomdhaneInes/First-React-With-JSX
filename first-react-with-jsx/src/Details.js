import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Details = () => {
  const {type, id} = useParams()
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate()

  useEffect(()=>{
      axios.get(`https://swapi.dev/api/${type}/${id}`)
          .then(response=>{setResponseData(response.data)})
  }, [type, id]);

  const goToHomeWorld = homeWorld => {
    const homeWorldTable = homeWorld.split('/')
    navigate(`/planets/${homeWorldTable[homeWorldTable.length-2]}`)
  }

  const renderSection =()=>{
    switch (type) {
      case 'films': 
        return(
          <>
            <h3>{responseData.title}</h3>
            <div><b>Director: </b>{responseData.director}</div>
            <div><b>Release Date: </b>{responseData.release_date}</div>
            <div><b>Opening Crawl: </b>{responseData.opening_crawl}</div>
          </>
        )
        case 'people': 
        return(
          <>
            <h3>{responseData.name}</h3>
            <div><b>Hair Color: </b>{responseData.hair_color}</div>
            <div><b>Skin Color: </b>{responseData.skin_color}</div>
            <div><b>Gender: </b>{responseData.gender}</div>
            <div><button onClick={() => goToHomeWorld(responseData.homeworld)}>homeworld</button></div>
          </>
        )
        case 'planets': 
        return(
          <>
            <h3>{responseData.name}</h3>
            <div><b>Climate: </b>{responseData.climate}</div>
            <div><b>Terrain: </b>{responseData.terrain}</div>
            <div><b>Orbital Period: </b>{responseData.orbital_period}</div>
          </>
        )
        case 'species': 
        return(
          <>
            <h3>{responseData.name}</h3>
            <div><b>Classification: </b>{responseData.classification}</div>
            <div><b>Eye Colors: </b>{responseData.eye_colors}</div>
            <div><b>Orbital Period: </b>{responseData.orbital_period}</div>
            <div><b>Skin Colors: </b>{responseData.skin_colors}</div>
          </>
        )
        case 'starships': 
        return(
          <>
            <h3>{responseData.name}</h3>
            <div><b>Manufacturer: </b>{responseData.manufacturer}</div>
            <div><b>Model: </b>{responseData.model}</div>
            <div><b>Crew: </b>{responseData.crew}</div>
            <div><b>Hyperdrive Rating: </b>{responseData.hyperdrive_rating}</div>
          </>
        )
        case 'vehicles': 
        return(
          <>
            <h3>{responseData.name}</h3>
            <div><b>Manufacturer: </b>{responseData.manufacturer}</div>
            <div><b>Model: </b>{responseData.model}</div>
            <div><b>Crew: </b>{responseData.crew}</div>
            <div><b>Cargo Capacity: </b>{responseData.cargo_capacity}</div>
          </>
        )
    
      default:
        break;
    } 
  }


  return(
    <div className='content'>
      {responseData ? renderSection() : <div style={{textAlign: 'center'}}><h1 >{'These aren\'t the droids you\'re looking for'}</h1><img alt='obi-wan kenobi' src={'https://upload.wikimedia.org/wikipedia/en/c/c5/Obiwan1.jpg'}/></div>}
    </div>
  )
}

export default Details