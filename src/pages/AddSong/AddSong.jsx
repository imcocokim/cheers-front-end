import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchSongForm from "../../components/SearchSongForm/SearchSongFrom";

const AddSong = () => {
  const navigate = useNavigate()
  const [result, setResult] = useState()
  
  return (
    <>
      <h1>Add a Song</h1>
      <button onClick={() => navigate(-1)}>Cancel</button>
      <SearchSongForm setResult={setResult} />
      <h2>Search Result:</h2>
      {result ?
      <>
        <img src={result.strTrackThumb} alt={`${result.strTrack} album cover`}/>
        <p>{result.strTrack}: {result.strArtist}</p>
      </>
      :
      <h3>Search a song you like!</h3>
      }
    </>
  );
}

export default AddSong;