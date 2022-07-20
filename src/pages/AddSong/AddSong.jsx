import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchSongForm from "../../components/SearchSongForm/SearchSongFrom";
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

  // const handleClick = async (event) => {
  //   event.preventDefault()
  //   const data = await songService.searchSongs(result)
  // }

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
            <button onClick={() => songService.addBoozyTune(result)}>Add</button>
          </>
        : display()
      }
    </>
  );
}

export default AddSong;