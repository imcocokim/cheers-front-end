import { Link } from "react-router-dom";

const boozyTuneCard = ({song}) => {
  return (
    <div className="card">
      <img 
        src={
        song.strTrackThumb
      } 
      alt={`${song.strTrack} album cover`}
      />
      <p>{song.title}</p>
      <p>{song.artist}</p>
      <p>Drink Name SOS</p>
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
//   {user?.profile === puppy.owner?._id &&
//     <div className="card-footer">
//       <Link
//         to="/edit"
//         className='btn btn-sm btn-warning'
//         state={{puppy}}
//       >
//         Edit
//       </Link>
//       <button 
//         className="btn btn-sm btn-danger m-left"
//         onClick={()=> handleDeletePuppy(puppy._id)}
//       >
//         Delete
//       </button>
//     </div>
// }
}

export default boozyTuneCard;