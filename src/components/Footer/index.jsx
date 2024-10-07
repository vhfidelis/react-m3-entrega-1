import styles from "./index.module.css"
import { user } from "../../data/user.js"
import whatsappImg from "../../assets/whatsapp-icon.png"
import linkedinImg from "../../assets/linkedin-icon.png"
import githubImg from "../../assets/github-icon.png"
const Footer = () => {
      return (
            <footer>
                  <div className={styles.footer__container}>
                        <div className={styles.contact__div}>
                              <h2 className="title2">Contato</h2>
                              <div className={styles.social__div}>
                                    <img className={styles.social__icons} src={whatsappImg} alt="whatsapp Icon" />
                                    <img src={linkedinImg} alt="linkedin Icon" />
                                    <img src={githubImg} alt="github Icon" />
                              </div>
                        </div>
                        <p className={styles.footer__text}>Todos os direitos reservados - {user}</p>
                  </div>
            </footer>
      )
}

export default Footer