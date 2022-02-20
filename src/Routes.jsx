import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import layers from './constants/Layers'

export function AppRoutes() {
  const firstLayer = layers[0]
  return (
    <Router>
      <Routes>
        <Route key={'first-layer'} path={'/'} element={<Home layer={firstLayer.key}/>} />
        {layers.map(layer => {
          const { key } = layer
          return <Route key={key} path={`${key}`} element={<Home layer={key}/>} />
        })}
      </Routes>
    </Router>
  )
}