import styles from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom';

export default function Nav({ onSearch }) {
  return (
    <nav className={styles.nav}>
      <h3>HOME</h3>
      <h3>ABOUT</h3>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}