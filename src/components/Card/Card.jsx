import { Link } from 'react-router-dom';
import styles from './Card.module.css'

function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={styles.card}>
      <div className={styles.headerCard}>
        <button className={styles.button} onClick={() => onClose(id)}>x</button>
        <Link className={styles.detailLink} to={`/detail/${id}`}><h2>{name}</h2></Link>
      </div>
      <div><img className={styles.cardImg} src={image} alt="" /></div>
      <h2 className={styles.species}><b>Species:</b> {species}</h2>
      <h2 className={styles.gender}><b>Gender:</b> {gender}</h2>
    </div>
  );
}

export default Card;