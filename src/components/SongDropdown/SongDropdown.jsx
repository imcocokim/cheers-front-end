const SongDropdown = (props) => {
  return ( 
    props.songs.length &&
    <select onChange={props.onChange} name="favoriteSong">
      <option></option>
      {props.songs.map((song, idx) => (
        <option key={idx} value={song._id}>
          {song.name} by {song.artist} 
        </option>
      ))}
  </select>
  );
}

export default SongDropdown;