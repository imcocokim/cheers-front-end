import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as songService from '../../services/songService'

const AddBoozyTune = () => {
  const location = useLocation()
  console.log(location)
  const [track, setTrack] = useState(location.state)

  return (
    <>
      <h1>{track.strTrack}</h1>
      <h3>{track.strArtist}</h3>
      <h3>{track.strGenre}</h3>
    </>
  );
}

export default AddBoozyTune;