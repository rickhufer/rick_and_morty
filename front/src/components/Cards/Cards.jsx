import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import { getFavorites } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Cards.module.css"

const Cards = ({ characters, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <div>
      <h1 className={styles.h1}>Tarjetas de Rick y Morty</h1>
      <div className={styles.containerCards}>
        {characters?.map(({ id, name, species, gender, image }) =>
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose} />
        )}
      </div>
    </div>
  )
}

export default Cards;