import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SearchSongForm from "../../components/SearchSongForm/SearchSongFrom";
import styles from './AddSong.module.css'
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

  const addSongToDb = async () => {
    const res = await songService.addSong(result)
    console.log(res)
    navigate('/add-boozy-tune', {state: res})
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
            <p>{result.strTrack}: {result.strArtist} --- {result.strAlbum}</p>
            <button onClick={addSongToDb}>Add</button>
          </>
        : display()
      }
    </>
  );
}

export default AddSong;