import styles from "./index.module.css"
import { username } from "../../data/user.js"
import bannerImg from "../../assets/banner-img.png"
const BannerSection = () => {
      return (
            <section className={styles.container}>
                  <div className={styles.first__box}>
                        <h3 className={styles.username}>{username}</h3>
                        <h1 className="title1">Bem vindo ao meu portfólio</h1>
                        <p className="paragraph">uma frase importante sobre mim</p>
                        <button className={styles.banner__button}>Saiba mais</button>
                  </div>
                  <img className={styles.banner__img} src={bannerImg} alt="Banner img" />
            </section>
      )
}

export default BannerSection