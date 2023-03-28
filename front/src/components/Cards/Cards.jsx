import Card from "../Card/Card";
import styles from "./Cards.module.css"

const Cards = ({ characters, onClose }) => {
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