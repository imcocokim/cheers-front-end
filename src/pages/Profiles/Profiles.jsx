import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import { Route } from 'react-router-dom'

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
            <div className='all-profiles'>
              <img 
                src={
                  profile.photo
                }
                alt={profile.name}
                className="card-photo"
                style={{width:"150px"}}
              />
              <div className='card-body'>
                <Link to={`/profiles/${profile._id}`}>
                  <h2 key={profile._id} className='card-text'>{profile.name}</h2>
                </Link>
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