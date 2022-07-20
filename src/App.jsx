import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as songService from './services/songService'
import AddSong from './pages/AddSong/AddSong'
import MyTastes from './pages/MyTastes/MyTastes'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import MyPageDetails from './pages/MyPageDetails/MyPageDetails'
import EditProfile from './pages/EditProfile/EditProfile'
import * as drinkService from './services/drinkService'
import AddBoozyTune from './pages/AddBoozyTune/AddBoozyTune'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [userProfile, setUserProfile] = useState()
  const [drinks, setDrinks] = useState(drinkService.getAllDrinks()) 
  const [songs, setSongs] = useState([])
  const navigate = useNavigate()
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profileData = await profileService.getAllProfiles()
      const userProf = profileData.filter(profile => profile._id === user.profile)
      setUserProfile(userProf[0])
    }
    fetchUserProfile()
  }, [user])

  useEffect(() => {
    const fetchAllSongs = async () => {
      const songData = await songService.getAllSongs()
      setSongs(songData)
    }
    fetchAllSongs()
  }, [])

  const handleUpdateProfile = async (profileData) => {
    const updatedProfile = await profileService.updateProfile(profileData)
    setUserProfile(updatedProfile)
    navigate('/profiles')
  }

  useEffect(() => {
    const fetchDrinks = async () => {
      const drinkData = await drinkService.getAllDrinks() 
      setDrinks(drinkData)
    }
    fetchDrinks()
  },[])


  return (
    <>
      <NavBar user={user} userProfile={userProfile} handleLogout={handleLogout} />
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
          element={user ? <Profiles user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={<ProfileDetails user={user} />}
        />
        <Route
          path="/my-page"
          element={<MyPageDetails user={user} />}
        />
        <Route
          path="/edit-profile"
          element={<EditProfile user={user} drinks={drinks} songs={songs}handleUpdateProfile={handleUpdateProfile}/>}
        />
        <Route
          path="/add-song"
          element={<AddSong />}
          user={user}
        />
        <Route
          path="/add-boozy-tune"
          element={<AddBoozyTune drinks={drinks} userProfile={userProfile}/>}
          user={user}
        />
        <Route
          path="/my-tastes"
          element={<MyTastes drinks={drinks} userProfile={userProfile}/>}
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
