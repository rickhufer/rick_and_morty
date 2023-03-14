import React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "b682d44ea194.e61171acf8c72545c21e";

    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
      .then(response => setCharacter(response.data))
  }, []);

  return (
    <div>
      {
        character.name ?
          (<>
            <h1><b>Name: </b>{character.name}</h1>
            <p><b>Status: </b>{character.status}</p>
            <p><b>Specie: </b>{character.species}</p>
            <p><b>Gender: </b>{character.gender}</p>
            <p><b>Origin: </b>{character.origin?.name}</p>
            <img src={character.image} alt="" />
          </>
          ) :
          (<h3>Cargando...</h3>)
      }

    </div>
  )
}