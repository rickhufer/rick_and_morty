import styles from './Card.module.css'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.headerCard}>
        <button className={styles.button} onClick={props.onClose}>x</button>
        <h2>{props.name}</h2>
      </div>
      <div><img className={styles.cardImg} src={props.image} alt="" /></div>
      <h2 className={styles.species}><b>Species:</b> {props.species}</h2>
      <h2 className={styles.gender}><b>Gender:</b> {props.gender}</h2>
    </div>
  );
}

export default Card;