import { useEffect, useState } from 'react' 
import { useLocation } from 'react-router-dom'
import BoozyTuneCard from '../../components/BoozyTuneCard/BoozyTuneCard'
import * as boozyTuneService from '../../services/boozyTuneService'



const ProfileDetails = ({user}) => {
  const location = useLocation()
  const [profile, setProfile] = useState(location.state.profile)
  const [boozyTunes, setBoozyTunes] = useState(profile.boozyTunes)

  useEffect(() => {
    const fetchAllBoozyTunes = async () => {
      const boozyData = await boozyTuneService.getAllBoozyTunes()
      setBoozyTunes(boozyData)
    }
    fetchAllBoozyTunes()
  }, [])

  return (
    <>
      <img src={profile.photo}
        alt={profile.name}
        className="profile-photo"
        style={{width:"300px"}}
      />
      <h1>{profile.name}</h1> 
      <p>
        {profile.favoriteSong
          ? `Favorite Song: ${profile.favoriteSong?.name} by ${profile.favoriteSong?.artist}`
          : `${profile.name} did not add favorite song`  
        }
      </p>
      <p>
        {profile.favoriteDrink
          ? `Favorite Drink: ${profile.favoriteDrink?.name} ${profile.favoriteDrink?.category}`
          : `${profile.name} did not add favorite drink`    
        }
      </p>
      <h2>{profile.name}'s Boozy Tunes</h2>
      <div>
        {profile.boozyTunes.map(boozyTune =>
          <BoozyTuneCard boozyTune={boozyTune}/>
        )}
      </div>
    </>
  )
}

export default ProfileDetails