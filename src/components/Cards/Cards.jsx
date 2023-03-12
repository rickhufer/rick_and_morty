import Card from "../Card/Card";
import styles from './Cards.module.css'

function Cards(props) {
  return (
    <div className={styles.containerCards}>
      {props.characters.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
          />
        );
      })}
    </div>
  );
}

export default Cards;