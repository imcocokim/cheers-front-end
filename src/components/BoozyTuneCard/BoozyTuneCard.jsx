import { Link } from "react-router-dom"
import styles from './BoozyTuneCard.module.css'
import blue from './images/cheers-blue.png'
import gray from './images/cheers-gray.png'
import black from './images/cheers-black.png'
import red from './images/cheers-red.png'


const BoozyTuneCard = ({boozyTune, profile, user, handleDeleteBzyTn}) => {
  
  function getRandomBg() {
    const randomBgColors = [blue, gray, black, red]
    return randomBgColors[Math.floor(Math.random() * randomBgColors.length)]
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {boozyTune.song.img 
        ?
        <img 
          src={
          boozyTune.song.img
        } 
        alt={`${boozyTune.song.name} album cover`}
        />
        : <img src={getRandomBg()} alt={`${boozyTune.song.name} album cover`}/>
        }
        <p>Tune Title: {boozyTune.song.name}</p>
        <p>Artist: {boozyTune.song.artist}</p>
        <p>Paired booze: {boozyTune.pairedDrink.name} {boozyTune.pairedDrink.category}</p>
        {boozyTune.comment ?
          <p>{profile.name} says: {boozyTune.comment}</p>
        :
        ''
        }
        {user.profile === profile._id ?
          <>
            <Link to="/edit-boozy-tune" state={boozyTune}>
              <button className={styles.buttons}>
                Edit
              </button>
            </Link>
            <button className={styles.buttons} onClick={() => handleDeleteBzyTn(boozyTune._id)}>
              Delete
            </button>
          </>
          :
          <>
          <p></p>
          </>
        }
      </div>
    </div>
  )
}

export default BoozyTuneCard;