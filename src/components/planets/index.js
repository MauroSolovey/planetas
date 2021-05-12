import React, {Fragment, useState, useEffect} from 'react';
import Planet from './planet';
import Form from './form'


async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}

const Planets = () => {

  const [planets, setPlanets] = useState([])  // cria o estado [var, funcao]

  useEffect(() => {
      getPlanets().then(data => {
        setPlanets(data['planets'])
      })
  },[])

  const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet])
  }

  const removeLast = () => {
    let new_planets = [...planets]
    new_planets.pop()
    setPlanets(new_planets)
  }

  const duplicateLastPlanet = () => {
    let last_planet = [...planets]
    last_planet.push(planets[planets.length - 1])
    setPlanets(last_planet)
  }
    return (
      <div>
        <h3>Planet List</h3>
        <button onClick={removeLast}>removeLast</button>
        <button onClick={duplicateLastPlanet}>duplicatePlanet</button>
        <hr/>
        <Form addPlanet={addPlanet} />
        <hr/>
        {planets.map((planet) =>
        <Planet
          id={planet.id}
          name={planet.name}
          description={planet.description}
          link={planet.link}
  				img_url={planet.img_url}
        />
        )}
      </div>
    )
}



export default Planets;
