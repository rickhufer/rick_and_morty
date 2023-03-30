import { connect, useDispatch } from "react-redux";
import styles from "./Favorites.module.css"
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrdenamiento = (event) => {
    let value = event.target.value;
    dispatch(orderCards(value));
  }
  const handleFiltrado = (event) => {
    let value = event.target.value;
    dispatch(filterCards(value));
  }

  return (
    <div>
      <h1 className={styles.h1}>Mis Favoritos</h1>
      <div className={styles.selectores}>
        <select className={styles.sel} name="ordenamiento" onChange={handleOrdenamiento} >
          <option value="all">Elija el orden...</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={styles.sel} name="filtrado" onChange={handleFiltrado}>
          <option value="all">Filter: Todos mis favoritos</option>
          <option value="Male">Filter: Male</option>
          <option value="Female">Filter: Female</option>
          <option value="Genderless">Filter: Genderless</option>
          <option value="unknown">Filter: Unknown</option>
        </select>
      </div>
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
    allFavorites: state.allFavorites,
  }
}

export default connect(mapStateToProps, null)(Favorites);