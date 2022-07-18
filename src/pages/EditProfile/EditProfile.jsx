import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styles from '../../components/SignupForm/SignupForm.module.css'
import DrinkDropdown from "../../components/DrinkDropdown/DrinkDropdown";

const EditProfile = props => {  
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.profile)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleUpdateProfile(formData)
      navigate('/')
      console.log(formData, "FORM DATA*******")
    } catch (err) {
      console.log(err)
    }
  }

  const isFormInvalid = () => {
    return !(formData.name && formData.favoriteSong)}
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="favorite-song" className={styles.label}>Favorite Song</label>
        <input
          type="text"
          autoComplete="off"
          id="favoriteSong"
          value={formData.favoriteSong ? formData.favoriteSong : ""}
          name="favoriteSong"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="favorite-drink" className={styles.label}>Favorite Drink</label>
          <DrinkDropdown drinks={props.drinks} onChange={handleChange} />
      </div>
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
          Edit Profile
        </button>
        <Link to='/my-page' state={formData}>
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default EditProfile
