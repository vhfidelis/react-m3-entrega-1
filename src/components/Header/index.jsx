import styles from "./index.module.css"
import logoImg from "../../assets/portfolio.png"
const Header = () => {
      return (
            <header className={styles.header_container}>
                  <img src={logoImg} alt="Portfolio Logo" className={styles.logo} />
                  <ul className={styles.ul_container}>
                        <li className="label">Sobre</li>
                        <li className="label">Stack</li>
                        <li className="label">Projetos</li>
                  </ul>
                  <button className={styles.contact_button}>Contato</button>
            </header>
      )
}

export default Header