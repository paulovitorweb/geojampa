import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import Config from './constants/Config'

export function AppRoutes() {
  return (
    <Router basename={Config.baseRoute}>
      <Routes>
        <Route path={''} element={<Home />} />
      </Routes>
    </Router>
  )
}