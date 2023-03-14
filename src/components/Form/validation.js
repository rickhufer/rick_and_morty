const regexEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

export const validate = (form, errors, setErrors) => {
  // Email Username
  if (!form.username) setErrors({ ...errors, username: "No existe correo" });
  else if (form.username.length > 35) setErrors({ ...errors, username: "Alcanzó el límite de 35 caracteres" })
  else if (regexEmail.test(form.username))
    setErrors({ ...errors, username: "" })
  else setErrors({ ...errors, username: "Usuario no valido" });

  // Password
  if (!form.password) setErrors({ ...errors, password: "Escriba su contraseña" });
  else if (!(form.password.length >= 6 && form.password.length <= 10)) setErrors({ ...errors, password: "La contraseña debe estar entre 6 y 10 caracteres" })
  else if (!form.password.split('').find((elem) => !isNaN(elem))) setErrors({ ...errors, password: "La contraseña debe contener al menos un número" })
  else setErrors({ ...errors, password: "" })
}