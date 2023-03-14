import styles from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom';

export default function Nav({ onSearch, logout }) {
  return (
    <nav className={styles.nav}>
      <SearchBar onSearch={onSearch} logout={logout} />
      <div className={styles.contLinks}>
        <Link className={styles.link} to="/home">HOME</Link>
        <Link className={styles.link} to="/about">ABOUT</Link>
      </div>
    </nav>
  );
}