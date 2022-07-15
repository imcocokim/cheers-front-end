import { Link } from 'react-router-dom'
import { useState } from 'react';

const Profile = ({profile}) => {
  const [userProfile, setUserProfile] = useState()

  return ( 
    <>
      <div className='all-profiles'>
        <img src={profile.photo}
          alt={profile.name}
          className="card-photo"
          style={{width:"150px"}}
        />
        <div className='card-body'>
          <Link to={`/profile`} state={{profile}}>
            <h2 key={profile._id} className='card-text'>{profile.name}</h2>
          </Link>
          <p className='card-text'>{profile.favoriteSong}</p>
          <p className='card-text'>{profile.favoriteDrink}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;