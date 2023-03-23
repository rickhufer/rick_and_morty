import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

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
      axios(`${URL}/character/${id}?key=${KEY}`)
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

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) =>
        char.id !== id
      )

    )
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} logout={logout} />
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        {/* Aquí es /home */}
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
