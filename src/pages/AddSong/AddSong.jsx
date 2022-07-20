import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SearchSongForm from "../../components/SearchSongForm/SearchSongFrom"
import * as songService from '../../services/songService'

const AddSong = () => {
  const navigate = useNavigate()
  const [result, setResult] = useState()

  const display = () => {
    return (
      (result === null)
        ? <h3>We couldn't find your song...</h3>
        : <h3>Search a song you like!</h3>
    )
  }

  return (
    <>
      <h1>Add a Song</h1>
      <button onClick={() => navigate(-1)}>Cancel</button>
      <SearchSongForm setResult={setResult} />
      <h2>Search Result:</h2>
      {result 
        ? <>
            <img src={result.strTrackThumb} alt={`${result.strTrack} album cover`} />
            <p>{result.strTrack}: {result.strArtist} --- {result.strAlbum}</p>
            {/* <Link to='/add-boozy-tune' state={result}> */}
              <button onClick={() => songService.addSong(result)}>Add</button>
            {/* </Link> */}
          </>
        : display()
      }
    </>
  );
}

export default AddSong;