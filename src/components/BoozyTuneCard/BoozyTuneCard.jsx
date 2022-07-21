import { Link } from "react-router-dom";

const BoozyTuneCard = ({boozyTune, profile, user, handleDeleteBzyTn}) => {
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
          <button onClick={() => handleDeleteBzyTn(boozyTune._id)}>
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