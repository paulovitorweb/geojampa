export default {
  baseRoute: '/geojampa',
  appName: 'GeoJampa',
  appDescription: 'Veja dados geográficos da cidade de João Pessoa, como bairros, praças, parques, escolas, ciclovias etc.',
  map: {
    tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: `
      &copy; 
      <a href="https://www.openstreetmap.org/copyright" target="_blank">
        OpenStreetMap
      </a> 
      contributors
       | 
      <a href="https://github.com/paulovitorweb/geodata-jp" target="_blank">
        Geodata-JP
     </a>'
    `
  },
  links: {
    contribute: 'https://github.com/paulovitorweb/geodata-jp',
    repository: 'https://github.com/paulovitorweb/geodata-jp',
    sourceCode: 'https://github.com/paulovitorweb/geojampa'
  }
}