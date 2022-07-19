import { useState } from 'react' 
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import boozyTuneCard from '../../components/boozyTuneCard/boozyTuneCard';


const MyPageDetails = ({user}) => {
  const location = useLocation()
  const [profile, setProfile] = useState(location.state)
  return ( 
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
      
      {profile.favoriteSong}
      {profile.favoriteDrink}
      <h2>{profile.name}'s Boozy Tunes</h2>
      
      <div>
        <boozyTuneCard 
  
        />
      </div>
      
    </>
  );
}

export default MyPageDetails;