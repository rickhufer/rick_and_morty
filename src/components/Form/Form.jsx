import styles from './Form.module.css'
import { useState } from 'react';
import { validate } from './validation';

function Form(props) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleinputChange = (event) => {
    const prop = event.target.name;
    const val = event.target.value;

    setForm({ ...form, [prop]: val, });
    validate({ ...form, [prop]: val, }, errors, setErrors);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(form);

    if (!Object.keys(errors).length) {
      alert("Bienvenido");
      setErrors({ username: "", password: "" })
      setForm({ username: "", password: "" })
    }
    else alert("Datos incorrectos")
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Plataforma de Rick & Morty</h1>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="username" >Usuario: </label>
          <div>
            <input
              type="text"
              name='username'
              className={errors.username ? styles.errors : styles.success}
              value={form.username}
              onChange={handleinputChange} />
            <br /><span className={styles.inputMessage}>{errors.username}</span>
          </div>
        </div>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="password">Contraseña: </label>
          <div>
            <input
              type="text"
              name='password'
              className={errors.password ? styles.errors : styles.success}
              value={form.password}
              onChange={handleinputChange} />
            <br /><span className={styles.inputMessage}>{errors.password}</span>
          </div>
        </div>
        <button type='submit' className={styles.button}>Iniciar sesión</button>
      </form>
    </>
  );
};

export default Form;