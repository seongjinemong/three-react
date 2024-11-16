import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Polygon from './pages/polygons/Polygon.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/polygons',
    element: <Polygon />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
