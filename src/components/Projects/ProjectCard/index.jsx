import styles from "../../Projects/index.module.css"
import gitIcon from "../../../assets/git-icon.png"
const ProjectCard = ({ name, description }) => {
      return (
            <li key={name} className={styles.projects__cards}>
                  <div className={styles.inner__div}>
                        <h3 className="title3">{name}</h3>
                        <img src={gitIcon} alt="icone github" />
                  </div>
                  <p className={styles.inner__paragraph}>{description}</p>
                  <a className={styles.link} href="#">Saiba mais</a>
            </li>
      )
}

export default ProjectCard