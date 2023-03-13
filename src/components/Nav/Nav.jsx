import styles from './Nav.module.css'
import SearchBar from "../SearchBar/SearchBar"

export default function Nav({ onSearch }) {
  return (
    <nav className={styles.nav}>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}