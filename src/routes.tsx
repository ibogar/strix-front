import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import FollowersPage from './pages/FollowersPage'
import Following from './pages/Following'

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/followers" element={<FollowersPage />} />
    <Route path="/following" element={<Following />} />
  </Routes>
)

export default MyRoutes