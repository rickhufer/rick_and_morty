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
import { addCharacter, removeFavorite, removeCharacter } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { characters } = useSelector((state) => state);

  // aqui cambiar a false para seguridad
  const [access, setAccess] = useState(true);
  const username = 'admin@mail.com';
  const password = 'password1';

  const onSearch = (id) => {
    if (characters.find((elem) => elem.id === id))
      return alert("Este personaje ya existe");
    else dispatch(addCharacter(id));
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
    dispatch(removeCharacter(id));
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
