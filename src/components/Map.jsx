import 'leaflet/dist/leaflet.css'
import { useState, useEffect, useRef } from 'react'
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

export default function Map(props) {
  const [center, ] = useState([-7.131098, -34.851901])
  const [zoom, ] = useState(13)
  const [geoData, setGeoData] = useState()
  const GeoJSONEL = useRef(null)

  useEffect(() => {
    fetch(props.layer.pathToFetch).then(r => r.json())
      .then(geojson => setGeoData(geojson))
      .catch(e => console.log(e))
  }, [])

  const highlightFeature = event => {
    var layer = event.target
    layer.setStyle({
      weight: 5,
      color: "#666",
      fillOpacity: 0.7
    })

    layer.bringToFront()
  }

  const resetHighlight = event => {
    GeoJSONEL.current.resetStyle(event.target)
  }

  const bindPopupToFeature = feature => {
    if (feature.properties) {
      const content = Object.entries(feature.properties).map(([field, value]) => {
        return `<p><b>${field}</b>: ${value}</p>`
      }).join('')
      return content
    }
  }
  

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight
    })
    layer.bindPopup(bindPopupToFeature(feature))
  }

  return (
    <MapContainer
      center={center} 
      zoom={zoom}
      style={style}
    >
      <TileLayer 
        url={tileLayer.url} 
        attribution={tileLayer.attribution}
      />
      {geoData && 
        <GeoJSON 
          ref={GeoJSONEL}
          data={geoData}
          onEachFeature={onEachFeature}
          style={
            {color: props.layer.color || 'blue'}
          }
        />
      }
    </MapContainer>
  )
}
