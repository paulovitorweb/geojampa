import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import layers from './constants/Layers'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {layers.map(layer => {
          const { key } = layer
          return <Route key={key} path={`/${key}`} element={<Home layer={key}/>} />
        })}
      </Routes>
    </Router>
  )
}