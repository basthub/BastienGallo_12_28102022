import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'

function AppRouter() {
  return (
    <Routes>
      <Route path="/user/:userId" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default AppRouter
