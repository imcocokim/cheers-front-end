import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import Profile from '../../components/Profile/Profile'
import styles from './Profiles.module.css'


const Profiles = ({user}) => {
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
      <h1 className={styles.profcon}>Profiles</h1>
      {profiles.length ? 
        <div className={styles.profcon}>
          {profiles.map((profile) =>
            <Profile profile={profile} user={user} key={profile._id}/>
          )}
        </div>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles