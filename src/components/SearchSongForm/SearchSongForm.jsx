import { useState } from "react"
import { searchSongs } from "../../services/songService"
import styles from './SearchSongForm.module.css'


const SearchSongForm = (props) => {
  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await searchSongs(artist, song)
    if (data.songs.track) {
      props.setResult(data.songs.track[0])
    } else {
      props.setResult(null)
    }
  }

  return (
    <>
      <div className={styles.src}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="artist"
            autoComplete="off"
            required
            placeholder="artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <input
            type="text"
            name="song"
            autoComplete="off"
            required
            placeholder="song name"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
          <br />
          <br />
          <button className={styles.sub} type="submit">Search</button>
        </form>
      </div>
    </>
  )
}

export default SearchSongForm;