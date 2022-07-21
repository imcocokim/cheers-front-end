import { Link } from 'react-router-dom'
import styles from './Profile.module.css'


const Profile = ({user, profile}) => {
  return ( 
    <div className={styles.wrapper}>
      <div className='all-profiles'>
        <img src={profile.photo}
          alt={profile.name}
          className={styles.cardPhoto}
          style={{width:"135px", height:"135px"}}
        />
        <div className={styles.cardBody}>
          {user.profile === profile._id ?
            <div>
              <Link to="/my-page" state={profile}>
                <h2 key={profile._id} className='card-text'>{profile.name}</h2>
              </Link>
            </div>
            :
            <div>
              <Link to={`/profile`} state={{profile}}>
                <h2 key={profile._id} className='card-text'>{profile.name}</h2>
              </Link>
            </div>
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
    </div>
  );
}

export default Profile;