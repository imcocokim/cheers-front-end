import { useState, useEffect } from 'react' 
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BoozyTuneCard from '../../components/BoozyTuneCard/BoozyTuneCard'
import * as boozyTuneService from '../../services/boozyTuneService'

const MyPageDetails = (props) => {
  const location = useLocation()
  const [profile, setProfile] = useState(location.state)
  const [boozyTunes, setBoozyTunes] = useState([])

  useEffect(() => {
    const fetchAllBoozyTunes = async () => {
      const boozyData = await boozyTuneService.getAllBoozyTunes(profile._id)
      setBoozyTunes(boozyData)
    }
    fetchAllBoozyTunes()
  }, [profile._id])

  const handleDeleteBzyTn = async (id) => {
    const deletedBzyTn = await boozyTuneService.deleteBoozyTune(id)
    setBoozyTunes(boozyTunes.filter(boozyTune => boozyTune._id !== deletedBzyTn._id))
  }

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
        {boozyTunes?.map((boozyTune, idx) =>
          <BoozyTuneCard boozyTune={boozyTune} key={idx} profile={profile} user={props.user} handleDeleteBzyTn={handleDeleteBzyTn}/>
        )}
      </div>
      
    </>
  );
}

export default MyPageDetails;