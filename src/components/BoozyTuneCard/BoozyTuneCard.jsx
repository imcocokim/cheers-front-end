import { Link } from "react-router-dom";

const BoozyTuneCard = ({boozyTune}) => {

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
      <Link
        to="/edit"
        className='btn ed'
      >
        Edit
      </Link>
      <button 
        className="btn del"
        // onClick={()=> deleteSong (song._id)}
      >
        Delete
      </button>

    </div>
  )
}

export default BoozyTuneCard;