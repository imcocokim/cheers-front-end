import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DrinkDropdown from '../../components/DrinkDropdown/DrinkDropdown';
import * as songService from '../../services/songService'
import { drinks } from '../../data/drink-data';

const AddBoozyTune = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const track = location.state

  const [selectedDrink, setSelectedDrink] = useState()

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value)
  }

  return (
    <>
      <form onSubmit={() => songService.addBoozyTune(location.state)}>
        <h1>{track.strTrack}</h1>
        <h3>{track.strArtist}</h3>
        <h3>{track.strGenre}</h3>
        <button onClick={() => navigate(-1)}>Cancel</button><br />
        <DrinkDropdown drinks={drinks} onChange={handleDrinkChange}/><br />
        <input type="text" /><br />
        <button type='submit'>Add Boozy Tune</button>
      </form>
    </>
  );
}

export default AddBoozyTune;