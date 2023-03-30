import styles from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { addFavorite, removeFavorite, getFavorites } from "../../redux/actions";
import React from "react";
import axios from "axios"

const Card = ({ id, name, species, gender, image, onClose, allCharacters, addFavorite, removeFavorite }) => {

  const [isFav, setIsFav] = useState(false);

  // const addFavorite = (character) => {
  //   axios
  //     .post("http://localhost:3001/rickandmorty/fav", character)
  //     .then((res) => console.log("ok"))
  // }
  // const removeFavorites = (id) => {
  //   axios
  //     .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
  //   dispatch(getFavorites());
  //   alert("Eliminado con exito");
  // }

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
      });
    }
  };

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  return (
    <div className={styles.card}>
      <Link className={styles.detailLink} to={`/detail/${id}`}>
        <div><img className={styles.cardImg} src={image} alt="" /></div>
        <h2 className={styles.h2}>{id} {name}</h2>
      </Link>

      <h2 className={styles.species}><b>Species:</b> {species}</h2>

      <h2 className={styles.gender}><b>Gender:</b> {gender}</h2>

      <div className={styles.buttons}>
        {isFav ? (<button onClick={handleFavorite} className={styles.button}><FontAwesomeIcon className={styles.buttonLikeEnabled} icon={faHeart} size="2x" /></button>) : <button onClick={handleFavorite} className={styles.button}><FontAwesomeIcon className={styles.buttonLike} icon={faHeart} size="2x" /></button>}
        <button className={styles.button} onClick={() => onClose(id)}><FontAwesomeIcon className={styles.buttonClose} icon={faCircleXmark} size="2x" /></button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allCharacters: state.allCharacters,
    myFavorites: state.myFavorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => { dispatch(addFavorite(character)) },
    removeFavorite: (id) => { dispatch(removeFavorite(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);