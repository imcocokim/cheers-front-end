import { useState } from "react"
import DrinkDropdown from "../../components/DrinkDropdown/DrinkDropdown"
import styles from './MyTastes.module.css'

const MyTastes = ({drinks, userProfile}) => {
  const [selectedDrink, setSelectedDrink] = useState()

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value)
  }

  return ( 
    <div className={styles.dd}>
      <DrinkDropdown drinks={drinks} onChange={handleDrinkChange} />
      <br />
      <br />
      {userProfile?.boozyTunes ?
        <h1 className={styles.bt}>These are the boozy tunes</h1>
      :
        <h1>You don't have any boozy tunes!</h1>
      }
    </div>
  )
}

export default MyTastes;