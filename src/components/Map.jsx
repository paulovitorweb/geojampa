import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'

const zoom = 13
const style = {
  height: '100vh', 
  width: '100%'
}
const tileLayer = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: `
    &copy; 
    <a href="https://www.openstreetmap.org/copyright">
      OpenStreetMap
    </a> 
    contributors'
  `
}
const mapCenter = [-7.131098, -34.851901]

export default function Map(props) {

  const [geoData, setGeoData] = useState()

  useEffect(() => {
    fetch(props.layer.pathToFetch).then(r => r.json())
      .then(geojson => setGeoData(geojson))
      .catch(e => console.log(e))
  }, [])

  return (
    <MapContainer 
      center={mapCenter} 
      zoom={zoom} 
      style={style}
    >
      <TileLayer 
        url={tileLayer.url} 
        attribution={tileLayer.attribution}
      />
      {geoData && 
        <GeoJSON 
          data={geoData} 
          style={
            {color: props.layer.color || 'blue'}
          }
        />
      }
    </MapContainer>
  )
}
