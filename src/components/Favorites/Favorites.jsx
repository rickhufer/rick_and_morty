import { connect } from "react-redux";
import styles from "./Favorites.module.css"
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import { useEffect, useState } from "react";

const Favorites = ({ myFavorites, allFavorites, characters, orderCards, filterCards }) => {

  const [order, setOrder] = useState("Ascendente");
  const [filter, setFilter] = useState("Male");

  const handleOrdenamiento = (event) => {
    let value = event.target.value;
    // console.log(value);
    orderCards(value);
    // setOrder(value);
  }
  const handleFiltrado = (event) => {
    let value = event.target.value;
    // console.log(value);
    filterCards(value);
  }
  useEffect(() => {
    orderCards("Ascendente");
    filterCards("Male");
  }, [])

  return (
    <div>
      <h1 className={styles.h1}>Mis Favoritos</h1>
      <div className={styles.selectores}>
        <select className={styles.sel} name="ordenamiento" onChange={handleOrdenamiento} >
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={styles.sel} name="filtrado" onChange={handleFiltrado}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
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
const mapDispatchToProps = (dispatch) => {
  return {
    filterCards: (gender) => { dispatch(filterCards(gender)) },
    orderCards: (select) => { dispatch(orderCards(select)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);