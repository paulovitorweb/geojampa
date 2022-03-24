import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import Config from '../constants/Config'


export default function Map(props) {
  const {tileLayerUrl, attribution} = Config.map

  const [center, ] = useState([-7.145098, -34.851901])
  const [zoom, ] = useState(12)
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

  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 5,
      fillColor: "blue",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    })
  }

  return (
    <MapContainer
      center={center} 
      zoom={zoom}
    >
      <TileLayer 
        url={tileLayerUrl} 
        attribution={attribution}
      />
      {geoData && 
        <GeoJSON 
          ref={GeoJSONEL}
          data={geoData}
          onEachFeature={onEachFeature}
          style={
            {color: props.layer.color || 'blue'}
          }
          pointToLayer={pointToLayer}
        />
      }
    </MapContainer>
  )
}
