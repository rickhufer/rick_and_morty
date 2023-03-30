import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { addCharacter, removeFavorite, removeCharacter } from "./redux/actions";

function App() {
  // const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  // const { characters } = useSelector((state) => state);

  // aqui cambiar a false para seguridad
  const [access, setAccess] = useState(true);
  const username = 'admin@mail.com';
  const password = 'password1';

  const onSearch = (id) => {
    const URL = "https://be-a-rym.up.railway.app/api";
    const KEY = "b682d44ea194.e61171acf8c72545c21e";

    if (characters.find((elem) => elem.id === id))
      return alert("Este personaje ya existe");
    else {
      axios.get(`${URL}/character/${id}?key=${KEY}`)
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
  // const onClose = (id) => {
  // dispatch(removeCharacter(id));
  // }
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) =>
        char.id !== id
      )
    )
  }
  useEffect(() => {
    !access && navigate('/');
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
