import { Link } from 'react-router-dom'
import { useState } from 'react';
import styles from './Profile.module.css'


const Profile = ({user, profile}) => {
  return ( 
    <>
      <div className='all-profiles'>
        <img src={profile.photo}
          alt={profile.name}
          className={styles.cardPhoto}
          style={{width:"135px", height:"135px"}}
        />
        <div className='card-body'>
          {user.profile === profile._id ?
            <>
              <Link to="/my-page" state={profile}>
                <h2 key={profile._id} className='card-text'>{profile.name}</h2>
              </Link>
            </>
            :
            <>
              <Link to={`/profile`} state={{profile}}>
                <h2 key={profile._id} className='card-text'>{profile.name}</h2>
              </Link>
            </>
          }
          <p className='card-text'>
            {profile.favoriteSong
              ? `Favorite Song: ${profile.favoriteSong?.name} by ${profile.favoriteSong?.artist}`
              : ''  
            }
          </p>
          <p className='card-text'>
            {profile.favoriteDrink
              ? `Favorite Drink: ${profile.favoriteDrink?.name} ${profile.favoriteDrink?.category}`
              : ''  
            }
            </p>
        </div>
      </div>
    </>
  );
}

export default Profile;