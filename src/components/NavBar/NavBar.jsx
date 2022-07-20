import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const NavBar = ({ user, userProfile, handleLogout }) => {
  return (
    <>
      {user ?
        <header className={styles.navbar}>
          {/* <ul> */}
          <h1 className={styles.cheers}>CHEERS</h1>
          <hr class="solid"/>
            <p className={styles.welc}>Welcome, {user.name}!</p>
            <li className={styles.navul}><Link to="/add-song">Add Tune</Link></li>
            <li className={styles.navul}><Link to="/boozy-tunes">Boozy Tunes</Link></li>
            <li className={styles.navul}><Link to="/my-tastes">My Tastes</Link></li>
            <li className={styles.navul}><Link to="/profiles">Profiles</Link></li>
            <li className={styles.navul}><Link to="/my-page" state={userProfile}>My Page</Link></li>
            <li className={styles.navul}><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          {/* </ul> */}
        </header>
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
