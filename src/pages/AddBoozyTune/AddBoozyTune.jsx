import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DrinkDropdown from '../../components/DrinkDropdown/DrinkDropdown'
import * as profileService from '../../services/profileService'

const AddBoozyTune = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const track = location.state

  const [selectedDrink, setSelectedDrink] = useState()
  const [boozyTuneSong, setBoozyTuneSong] = useState({
    img: track.strTrackThumb,
    name: track.strTrack,
    artist: track.strArtist,
    genre: track.strGenre
  })
  const [boozyTune, setBoozyTune] = useState({
    song: boozyTuneSong,
    pairedDrink: selectedDrink,
    comment: '',
    author: props.userProfile
  })

  const handleChange = evt => {
		setBoozyTune({ ...boozyTune, [evt.target.name]: evt.target.value })
  }

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value)
  }

  const handleSubmit = event => {
    navigate('/my-page')
    profileService.addBoozyTune(boozyTune)
  }
  console.log(boozyTune)
  return (
    <>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <h1>{track.strTrack}</h1>
        <h3>{track.strArtist}</h3>
        <h3>{track.strGenre}</h3>
        <button onClick={() => navigate('/add-song')}>Cancel</button><br />
        <DrinkDropdown drinks={props.drinks} onChange={handleDrinkChange}/><br />
        <input type="text" name='comment' value={boozyTune.comment} onChange={handleChange}/><br />
        <button type='submit'>Add Boozy Tune</button>
      </form>
    </>
  );
}

export default AddBoozyTune;