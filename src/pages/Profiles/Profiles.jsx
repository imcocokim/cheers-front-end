import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

import Profile from '../../components/Profile/Profile'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Profiles</h1>
      {profiles.length ? 
        <>
          {profiles.map((profile) =>
            <Profile profile={profile} key={profile._id}/>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles