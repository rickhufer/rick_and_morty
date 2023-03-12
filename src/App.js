import './App.css';
import characters from './data.js'
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
