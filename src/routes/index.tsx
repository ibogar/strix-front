import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import MyProfile from '../pages/MyProfile'
import FollowersPage from '../pages/FollowersPage'
import Following from '../pages/Following'
import EditProfile from '../pages/EditProfile'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

const MyRoutes = () => (
  <Routes>
    <Route 
      path="/" 
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
        } 
    />
    <Route 
      path="/login" 
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
        } 
    />
    <Route 
      path="/register" 
      element={
        <PublicRoute>
          <Register />
        </PublicRoute>
        } 
    />
    <Route 
      path="/profile/:username" 
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
        } 
    />
    <Route 
      path="/my_profile" 
      element={
        <ProtectedRoute>
          <MyProfile />
        </ProtectedRoute>
        } 
    />
    <Route 
      path="/followers" 
      element={
        <ProtectedRoute>
          <FollowersPage />
        </ProtectedRoute>
        } 
    />
    <Route 
      path="/following" 
      element={
        <ProtectedRoute>
          <Following />
        </ProtectedRoute>
        } 
    />
    <Route 
      path="/edit_profile" 
      element={
        <ProtectedRoute>
          <EditProfile />
        </ProtectedRoute>
        } 
    />
  </Routes>
)

export default MyRoutes