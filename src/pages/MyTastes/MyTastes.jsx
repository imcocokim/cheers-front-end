import { useState } from "react"
import DrinkDropdown from "../../components/DrinkDropdown/DrinkDropdown"
import styles from './MyTastes.module.css'

const MyTastes = ({drinks, userProfile}) => {
  const [selectedDrink, setSelectedDrink] = useState()

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value)
  }
  console.log(typeof(userProfile))
  console.log(userProfile)
  return ( 
    <>
      <DrinkDropdown className={styles.dd} drinks={drinks} onChange={handleDrinkChange} />
      {userProfile?.boozyTunes ?
        <h1 className={styles.bt}>These are the boozy tunes</h1>
      :
        <h1>You don't have any boozy tunes!</h1>
      }
    </>
  )
}

export default MyTastes;