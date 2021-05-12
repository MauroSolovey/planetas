import React, {Fragment, useState, useEffect} from 'react';
import DescWithLink from '../../shared/description_with_link'
import GrayImg from '../../shared/gray_img'
import Form from './form'



async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data
}
const Planet = (props) => {
  const [satellites, setSatellites] = useState([])

  useEffect(() => {
    getSatellites(props.id).then(data => {
      setSatellites(data['satellites'])
    })
  },[])

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite])
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <DescWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url}/>
      <h4>satelites</h4>
      <hr/>
      <Form addSatellite={addSatellite} />
      <hr/>
      <ul>
        {satellites.map((satellites, index) =>
        <li key={index}>{satellites.name}</li>
      )}
      </ul>
      <hr/>
    </div>
  )
}


export default Planet;
