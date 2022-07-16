import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddSong from './pages/AddSong/AddSong'
import MyTastes from './pages/MyTastes/MyTastes'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import MyPageDetails from './pages/MyPageDetails/MyPageDetails'
import EditProfile from './pages/EditProfile/EditProfile'
import { drinks } from './data/drink-data'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const [drinkCategory, setDrinkCategory] = useState()

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={<ProfileDetails user={user} />}
        />
        <Route
          path="/my-page"
          element={<MyPageDetails state={user} />}
        />
        <Route
          path="/edit-profile"
          element={<EditProfile user={user} />}
        />
        <Route
          path="/add-song"
          element={<AddSong />}
          user={user}
        />
        <Route
          path="/my-tastes"
          element={<MyTastes drinks={drinks} />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
