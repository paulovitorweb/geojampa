import layers from '../constants/Layers'
import CardLayer from './CardLayer'


export default function MenuLayers(props) {

  return (
    <div className='menu-layers'>
      {layers.map(layer => {
        return <CardLayer layer={layer} key={layer.key} />
      })}
    </div>
  )
}
