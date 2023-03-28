import styles from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { addFavorite, removeFavorite } from "../../redux/actions";
import React from "react";

const Card = ({ id, name, species, gender, image, onClose, myFavorites, addFavorite, removeFavorite }) => {

  const [isFav, setIsFav] = useState(false);

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
        onClose,
        addFavorite,
        removeFavorite,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

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
    myFavorites: state.myFavorites,
    allFavorites: state.allFavorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => { dispatch(addFavorite(character)) },
    removeFavorite: (id) => { dispatch(removeFavorite(id)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);