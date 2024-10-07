import styles from "./index.module.css"
import ProjectCard from "./ProjectCard/index.jsx"
import { projects } from "../../data/projects.js"
const Projects = () => {
      return (
            <ul className={styles.projects__container}>
                  <h2 className="title2">Projetos</h2>
                  <div className={styles.div__container}>
                        {projects.map((project) => ProjectCard(project))}
                  </div>
            </ul>
      )
}
export default Projects