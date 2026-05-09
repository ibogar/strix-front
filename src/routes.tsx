import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import FollowersPage from './pages/FollowersPage'
import Following from './pages/Following'
import EditProfile from './pages/EditProfile'

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/followers" element={<FollowersPage />} />
    <Route path="/following" element={<Following />} />
    <Route path="/edit_profile" element={<EditProfile />} />
  </Routes>
)

export default MyRoutes