import styles from "./index.module.css"
const AboutMe = () => {
      return (
            <section className={styles.about__section} >
                  <div className={styles.about__container}>
                        <h2 className={styles.about__tittle}>Sobre mim</h2>
                        <p className={styles.about__paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
                  </div>
            </section>
      )
}

export default AboutMe