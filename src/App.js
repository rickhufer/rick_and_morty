import './App.css';
// import characters from './data.js'
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "b682d44ea194.e61171acf8c72545c21e";

    if (characters.find(
      (elem) => elem.id === id)
    ) return alert("Personaje repetido");

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChar) => [...oldChar, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
