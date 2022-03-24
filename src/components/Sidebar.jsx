import AppIdentity from './AppIdentity'
import MenuLayers from './MenuLayers'
import MoreInfo from './MoreInfo'


export default function Sidebar(props) {

  return (
    <div className='sidebar'>
      <aside>
        <AppIdentity />
        <MenuLayers />
        <MoreInfo />
      </aside>
    </div>
  )
}
