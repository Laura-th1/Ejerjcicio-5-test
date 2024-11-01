import React, { useState } from 'react';
import style from "../Styles/Boton.module.css"; 

function Boton() {
  const [text, setText] = useState("Hacer clic aquí");

  const handleClick = () => {
    setText("¡Gracias por hacer clic!");
  };

  return <button className={style.boton} onClick={handleClick}>{text}</button>;
}

export default Boton;

