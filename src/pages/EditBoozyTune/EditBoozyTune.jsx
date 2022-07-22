import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DrinkDropdown from '../../components/DrinkDropdown/DrinkDropdown'
import * as boozyTuneService from '../../services/boozyTuneService'
import styles from './EditBoozyTune.module.css'

const EditBoozyTune = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const track = location.state

  const [selectedDrink, setSelectedDrink] = useState()
  const [comment, setComment] = useState(track.comment)

  const handleChange = evt => {
		setComment( evt.target.value )
  }

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const obj = {
      pairedDrink: selectedDrink,
      comment: comment,
    }
    await boozyTuneService.editBoozyTune(obj, track._id)
    navigate('/profiles')
  }
  
  return (
    <div>
      <form className={styles.edBtn} autoComplete='off' onSubmit={handleSubmit}>
        <img src={track.song.img} alt={`${track.song.name} album cover`}/>
        <h1>{track.song.name}</h1>
        <h3>{track.song.artist}</h3>
        <h3>{track.song.genre}</h3>
        <button onClick={() => navigate('/add-song')}>Cancel</button><br />
        <DrinkDropdown drinks={props.drinks} onChange={handleDrinkChange}/><br />
        <input type="text" name='comment' value={comment} onChange={handleChange}/><br />
        <button type='submit'>Update Boozy Tune</button>
      </form>
    </div>
  );
}

export default EditBoozyTune;