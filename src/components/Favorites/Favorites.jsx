import { connect } from "react-redux";
import styles from "./Favorites.module.css"
import Card from "../Card/Card";

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      <h1 className={styles.h1}>Mis Favoritos</h1>
      <div className={styles.favContainer}>
        {myFavorites.map(({ id, name, species, gender, image, onClose }) =>
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

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, null)(Favorites);