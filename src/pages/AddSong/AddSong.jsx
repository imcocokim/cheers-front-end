import { useState } from "react";
import { Link } from "react-router-dom";
import SearchSongForm from "../../components/SearchSongForm/SearchSongFrom";

const AddSong = () => {
  const [songs, setSongs] = useState([])
  
  return (
    <>
      <h1>Add a Song</h1>
      <Link to={'/'}>
        <button>Cancel</button>
      </Link>
      <SearchSongForm />
      <h2>Search Results:</h2>
      {songs.length ?
      <>
        {songs.map(song =>
          <h3>This is a song</h3>
        )}
      </>
      :
      <h3>Search a song you like!</h3>
      }
    </>
  );
}

export default AddSong;