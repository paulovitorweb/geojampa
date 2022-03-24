import { useQuery } from '../hooks/useQuery'
import Map from '../components/Map'
import layers from '../constants/Layers'
import Sidebar from '../components/Sidebar'
import '../styles/styles.css'


export function Home() {
  const firstLayer = layers[0]

  const getLayerObject = key => {
    return layers.filter(l => l.key === key)[0]
  }

  const query = useQuery()
  const layer = getLayerObject(query.get('l') || firstLayer.key) || getLayerObject(firstLayer.key)

  return (
    <div className='container'>
      <Sidebar />
      <Map layer={layer} />
    </div>
  )
}