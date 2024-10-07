import styles from "../index.module.css"
const TecnologieCard = ({ name, img }) => {
      return (
            <li className={styles.li__container} key={name}>
                  <img className={styles.tech__logo} src={img} alt={`icone ${name}`} />
                  <h3 className="title3">{name}</h3>
            </li>
      )
}

export default TecnologieCard