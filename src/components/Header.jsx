import airbnbLogo from '../assets/img/airbnb_logo.svg'
import styles from '../assets/styles/Header.module.css'

const Header = function () {
  return (
<header className={styles.header}>
  <img className={styles.logo} src={airbnbLogo} alt="Airbnb Logo" />
</header>
  );
}

export default Header;
