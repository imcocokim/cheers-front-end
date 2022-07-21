import { Link } from "react-router-dom";

const BoozyTuneCard = ({boozyTune, profile, user}) => {
  return (
    <div className="card">
      <img 
        src={
        boozyTune.song.img
      } 
      alt={`${boozyTune.song.name} album cover`}
      />
      <p>{boozyTune.song.name}</p>
      <p>{boozyTune.song.artist}</p>
      <p>{boozyTune.pairedDrink.name} {boozyTune.pairedDrink.category}</p>
      <p>{boozyTune.comment}</p>
      {user.profile === profile._id ?
        <>
          <Link to="/edit-boozy-tune" state={boozyTune}>
            Edit
          </Link>
          <button 
            className="btn del"
            // onClick={()=> deleteSong (song._id)}
          >
            Delete
          </button>
        </>
        :
        <>
        <p></p>
        </>
      }

    </div>
  )
}

export default BoozyTuneCard;