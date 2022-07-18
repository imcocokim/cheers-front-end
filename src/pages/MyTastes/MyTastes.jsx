import { useState } from "react"
import DrinkDropdown from "../../components/DrinkDropdown/DrinkDropdown"

const MyTastes = ({drinks, userProfile}) => {
  const [selectedDrink, setSelectedDrink] = useState()

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value)
  }
  console.log(typeof(userProfile))
  console.log(userProfile)
  return ( 
    <>
      <DrinkDropdown drinks={drinks} onChange={handleDrinkChange} />
      {userProfile?.boozyTunes ?
        <h1>These are the boozy tunes</h1>
      :
        <h1>You don't have any boozy tunes!</h1>
      }
    </>
  )
}

export default MyTastes;