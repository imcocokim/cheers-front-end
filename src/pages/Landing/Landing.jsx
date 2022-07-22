import styles from './Landing.module.css'

const Landing = ({ user, handleLogout }) => {
  return (
    <main className={styles.wcon}>
      <h1 className={styles.wel}>Welcome To CHEERS!!</h1>
      <p className={styles.par}>Come, grab a chair and share your thoughts on some of your favorite (or least favorite) drinks and music! No idea where to start? We got you! Inside, you'll be presented with the opportunity to pick, mix, match, and discover your favorite pairs of drinks/music. The vibes are yours to make!  If your looking for something new, you can visit other peoples pages as well to get some ideas! Chill, kick ya feet up and vibeee awayy! Have Fun!! 
      </p>
    </main>
  )
  }

export default Landing
