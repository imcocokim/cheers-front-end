// import { useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import DrinkDropdown from '../../components/DrinkDropdown/DrinkDropdown'
// import * as profileService from '../../services/profileService'

// const AddBoozyTune = () => {
//   const navigate = useNavigate()
//   const location = useLocation()
//   console.log(location)
//   const track = location.state

//   const [selectedDrink, setSelectedDrink] = useState()

//   const handleDrinkChange = (event) => {
//     setSelectedDrink(event.target.value)
//   }

//   return (
//     <>
//       <form onSubmit={() => profileService.addBoozyTune(location.state)}>
//         <h1>{track.strTrack}</h1>
//         <h3>{track.strArtist}</h3>
//         <h3>{track.strGenre}</h3>
//         <button onClick={() => navigate('/add-song')}>Cancel</button><br />
//         <DrinkDropdown onChange={handleDrinkChange}/><br />
//         <input type="text" /><br />
//         <button type='submit'>Add Boozy Tune</button>
//       </form>
//     </>
//   );
// }

// export default AddBoozyTune;