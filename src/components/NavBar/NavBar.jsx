import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const NavBar = ({ user, userProfile, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className={styles.navbar}>
          <ul className={styles.navitems}>
            <li className={styles.navul}>Welcome, {user.name}</li>
            <li className={styles.navul}><Link to="/add-song">Add Tune</Link></li>
            <li className={styles.navul}><Link to="/boozy-tunes">Boozy Tunes</Link></li>
            <li className={styles.navul}><Link to="/my-tastes">My Tastes</Link></li>
            <li className={styles.navul}><Link to="/profiles">Profiles</Link></li>
            <li className={styles.navul}><Link to="/my-page" state={userProfile}>My Page</Link></li>
            <li className={styles.navul}><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav className={styles.navbar}>
          <ul className={styles.navitems}>
            <li className={styles.navul}><Link to="/login">Log In</Link></li>
            <li className={styles.navul}><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
