import { connect } from "react-redux";
import styles from "./Favorites.module.css"
import Card from "../Card/Card";


const Favorites = ({ myFavorites }) => {
  return (
    <div className={styles.containerCards}>
      {myFavorites.map(({ id, name, species, gender, image }) =>
        <Card
          key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, null)(Favorites);