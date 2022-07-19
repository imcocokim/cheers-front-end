import { useState } from "react"
import { searchSongs } from "../../services/songService"

const SearchSongForm = (props) => {
  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await searchSongs(artist, song)
    console.log(data)
    if (data.songs.track) {
      props.setResult(data.songs.track[0])
    } else {
      props.setResult(null)
    }
  }

  return (
    <>
      <div>
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
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchSongForm;