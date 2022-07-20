import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const NavBar = ({ user, userProfile, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className={styles.navbar}>
          {/* <ul className={styles.navitems}> */}
            <p className={styles.welc}>Welcome, {user.name}</p>
            <br />
            <button className={styles.navul}><Link to="/add-song">Add Tune</Link></button>
            <button className={styles.navul}><Link to="/boozy-tunes">Boozy Tunes</Link></button>
            <button className={styles.navul}><Link to="/my-tastes">My Tastes</Link></button>
            <button className={styles.navul}><Link to="/profiles">Profiles</Link></button>
            <button className={styles.navul}><Link to="/my-page" state={userProfile}>My Page</Link></button>
            <button className={styles.navul}><Link to="" onClick={handleLogout}>LOG OUT</Link></button>
          {/* </ul> */}
        </nav>
      :
        <nav className={styles.navbar}>
          <ul className={styles.navitems}>
            <button className={styles.navul}><Link to="/login">Log In</Link></button>
            <button className={styles.navul}><Link to="/signup">Sign Up</Link></button>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
