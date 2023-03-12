import styles from './SearchBar.module.css'

function SearchBar(onSearch) {
  return (
    <div className={styles.search}>
      <input className={styles.input} type="text" />
      <button className={styles.button} onClick={(elem) => onSearch(elem)}>Agregar</button>
    </div>
  );
}

export default SearchBar;