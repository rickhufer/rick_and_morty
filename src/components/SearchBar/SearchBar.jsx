import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from "./SearchBar.module.css"
import { useState } from 'react'


const SearchBar = ({ onSearch, logout }) => {

  const [inputId, setInputId] = useState("");

  const handleInput = (event) => {
    setInputId(event.target.value);
  }

  return (
    <div className={styles.search}>
      <input onChange={handleInput} className={styles.input} type="text" />
      <button onClick={() => onSearch(inputId)} className={styles.button} type='submit'>
        <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} size="2x" />
      </button>
      <button onClick={() => logout()} className={styles.button2} type='submit'>
        Logout
      </button>
    </div>
  )
}

export default SearchBar;