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
      <p>Favorite Song: {/* {profile.favoriteSong} */}</p>
      <p>Favorite Drink: {profile.favoriteDrink?.name} {profile.favoriteDrink?.category}</p>
      <h2>{profile.name}'s Boozy Tunes</h2>
      <div>
        song/drink card goes here
      </div>
    </>
  )
}

export default ProfileDetails