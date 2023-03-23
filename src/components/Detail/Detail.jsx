import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styles from "./Detail.module.css"

const Detail = () => {
  const params = useParams();
  const { detailId } = params;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL = "https://be-a-rym.up.railway.app/api";
    const KEY = "b682d44ea194.e61171acf8c72545c21e";

    fetch(`${URL}/character/${detailId}?key=${KEY}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.detailContainer}>
      {character.name ? (
        <>
          <h2 className={styles.h2}>Personaje {character.id}: {character.name}</h2>
          <p><b>Status:</b> {character.status}</p>
          <p><b>Specie:</b> {character.species}</p>
          <p><b>Gender:</b> {character.gender}</p>
          <p><b>Origin:</b> {character.origin?.name}</p>
          <img className={styles.img} src={character.image} alt={character.name} />
        </>
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      )}
    </div>
  )
}

export default Detail;