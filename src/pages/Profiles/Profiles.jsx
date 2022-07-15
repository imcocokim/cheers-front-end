import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  console.log(profiles)

  return (
    <>
      <h1>Profiles</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <div className='card'>
              <img 
                src={
                  profile.photo
                }
                alt= {profile.name}
                className="card-photo"
                style={{width:"150px"}}
              />
              <div className='card-body'>
                <h2 key={profile._id} className='card-text'>{profile.name}</h2>
                <p className='card-text'>{profile.favoriteSong}</p>
                <p className='card-text'>{profile.favoriteDrink}</p>
              </div>
            </div>
            
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profiles