import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DrinkDropdown from '../../components/DrinkDropdown/DrinkDropdown'
import * as boozyTuneService from '../../services/boozyTuneService'
import styles from './AddBoozyTune.module.css'

const AddBoozyTune = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const track = location.state

  const [selectedDrink, setSelectedDrink] = useState()
  const [comment, setComment] = useState('')

  const handleChange = evt => {
		setComment( evt.target.value )
  }

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const obj = {
      song: track._id,
      pairedDrink: selectedDrink,
      comment: comment,
      author: props.userProfile
    }
    await boozyTuneService.addBoozyTune(obj)
    navigate('/profiles')
  }
  
  return (
    <div className={styles.boozyT}>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <h1>{track.name}</h1>
        <h3>{track.artist}</h3>
        <h3>{track.genre}</h3>
        <button onClick={() => navigate('/add-song')}>Cancel</button><br />
        <DrinkDropdown drinks={props.drinks} onChange={handleDrinkChange}/><br />
        <input type="text" name='comment' placeholder='Add your thoughts about this pairing!' value={comment} onChange={handleChange}/><br />
        <button type='submit'>Add Boozy Tune</button>
      </form>
    </div>
  );
}

export default AddBoozyTune;