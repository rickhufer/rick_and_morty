import styles from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom';

export default function Nav({ onSearch }) {
  return (
    <nav className={styles.nav}>
      <SearchBar onSearch={onSearch} />
      <div className={styles.contLinks}>
        <Link className={styles.link} to="/home">HOME</Link>
        <Link className={styles.link} to="/about">ABOUT</Link>
      </div>
    </nav>
  );
}