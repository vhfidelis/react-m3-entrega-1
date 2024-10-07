import styles from "./index.module.css"
import { technologies } from "../../data/technologies.js"
import TecnologieCard from "./TecnologieCard/index.jsx"
const Tecnologies = () => {
      return (
            <ul className={styles.tecnologies__container}>
                  <h2 className={styles.tecnologies__title}>Tecnologias</h2>
                  <div className={styles.div__container}>
                        {
                              technologies.map((technologie) => TecnologieCard(technologie))
                        }
                  </div>
            </ul>
      )
}

export default Tecnologies