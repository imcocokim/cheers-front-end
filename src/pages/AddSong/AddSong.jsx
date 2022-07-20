import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchSongForm from "../../components/SearchSongForm/SearchSongFrom";
import styles from './AddSong.module.css'

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
      <button className={styles.cbtn} onClick={() => navigate(-1)}>Cancel</button>
      <SearchSongForm setResult={setResult} />
      <h2>Search Result:</h2>
      {result 
        ? <>
            <img src={result.strTrackThumb} alt={`${result.strTrack} album cover`} />
            <p>{result.strTrack}: {result.strArtist}</p>
          </>
        : display()
      }
    </>
  );
}

export default AddSong;