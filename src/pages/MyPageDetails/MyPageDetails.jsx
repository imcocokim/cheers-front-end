import { useState, useEffect } from 'react' 
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BoozyTuneCard from '../../components/BoozyTuneCard/BoozyTuneCard'
import * as boozyTuneService from '../../services/boozyTuneService'

const MyPageDetails = () => {
  const location = useLocation()
  const [profile, setProfile] = useState(location.state)
  const [boozyTunes, setBoozyTunes] = useState([])

  useEffect(() => {
    const fetchAllBoozyTunes = async () => {
      const boozyData = await boozyTuneService.getAllBoozyTunes()
      setBoozyTunes(boozyData)
    }
    fetchAllBoozyTunes()
  }, [])

  return ( 
    profile &&
    <>
      <img src={profile.photo}
          alt={profile.name}
          className="profile-photo"
          style={{width:"300px"}}
        />
      <h1>{profile.name}</h1> 
      <Link
        className='button'
        to='/edit-profile'
        state={{profile}}
      >
        Edit
      </Link>
      
      <Link to="/changePassword">Change Password</Link>
      <p>
        {profile.favoriteSong
          ? `Favorite Song: ${profile.favoriteSong?.name} by ${profile.favoriteSong?.artist}`
          : 'Add your favorite song by clicking edit!'  
        }
      </p>
      <p>
        {profile.favoriteDrink
          ? `Favorite Drink: ${profile.favoriteDrink?.name} ${profile.favoriteDrink?.category}`
          : 'Add your favorite drink by clicking edit!'  
        }
      </p>
      <h2>My Boozy Tunes</h2>

      <div>
        {boozyTunes.map((boozyTune, idx) =>
          <BoozyTuneCard boozyTune={boozyTune} key={idx}/>
        )}
      </div>
      
    </>
  );
}

export default MyPageDetails;