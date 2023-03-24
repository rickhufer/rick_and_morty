import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.contLinks}>
          <Link to="/home"><h1><img className={styles.img} src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png" alt="" /></h1></Link>

          <Link className={styles.link} to="/home">HOME</Link>
          {/* <Link className={styles.link} to="/about">ABOUT</Link> */}
          <Link className={styles.link} to="/favorites">FAVORITES</Link>
        </div>
        <div>
          <SearchBar onSearch={onSearch} logout={logout} />
        </div>
      </div>
    </nav>
  )
}

export default Nav;