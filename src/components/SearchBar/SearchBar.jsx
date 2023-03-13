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
      <button className={styles.button2} onClick={() => { onSearch(Math.floor(Math.random() * 826)) }}>Aleatorio</button>
    </div>
  );
}

export default SearchBar;