import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { removeFavorite } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  // aqui cambiar a false para seguridad
  const [access, setAccess] = useState(true);
  const username = 'admin@mail.com';
  const password = 'password1';

  const onSearch = (id) => {

    if (characters.find((elem) => elem.id === id))
      return alert("Este personaje ya existe");
    else {
      axios.get(`http://localhost:3001/rickandmorty/onsearch/${id}`)
        .then((data) => {
          if (data.data.name) {
            setCharacters((oldChar) => [...oldChar, data.data]);
          } else {
            alert('No hay personajes con ese ID');
          }
        })
    }
  }
  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }
  const logout = () => {
    setAccess(false);
    navigate('/');
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) =>
        char.id !== id
      )
    );
    dispatch(removeFavorite(id))
  }
  useEffect(() => {
    !access && navigate('/');

    axios
      .get(`http://localhost:3001/rickandmorty/fav`)
      .then((data) => {
        setCharacters(() => [...data.data]);
      })

  }, [access]);

  return (
    <div className="App">
      <Nav onSearch={onSearch} logout={logout} />
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
