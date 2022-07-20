import { useState } from 'react' 
import { useLocation } from 'react-router-dom'


const ProfileDetails = ({user}) => {
  const location = useLocation()
  const [profile, setProfile] = useState(location.state.profile)

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
        song/drink card goes here
      </div>
    </>
  )
}

export default ProfileDetails