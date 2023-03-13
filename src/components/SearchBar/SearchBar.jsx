import { useState } from 'react';
import styles from './SearchBar.module.css'

function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const inputText = (event) => {
    setId(event.target.value);
  }

  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" onChange={inputText} />
      <button className={styles.button} onClick={() => { onSearch(id) }}>Agregar</button>
    </div>
  );
}

export default SearchBar;