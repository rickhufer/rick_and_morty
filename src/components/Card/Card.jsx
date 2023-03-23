import styles from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Card = ({ id, name, species, gender, image, onClose }) => {
  return (
    <div className={styles.card}>
      <Link className={styles.detailLink} to={`/detail/${id}`}>
        <div><img className={styles.cardImg} src={image} alt="" /></div>
        <h2 className={styles.h2}>{name}</h2>
      </Link>

      <h2 className={styles.species}><b>Species:</b> {species}</h2>

      <h2 className={styles.gender}><b>Gender:</b> {gender}</h2>

      <div className={styles.buttons}>
        <button className={styles.button}><FontAwesomeIcon className={styles.buttonLike} icon={faHeart} size="2x" /></button>
        <button className={styles.button} onClick={() => onClose(id)}><FontAwesomeIcon className={styles.buttonClose} icon={faCircleXmark} size="2x" /></button>
      </div>
    </div>
  )
}

export default Card;