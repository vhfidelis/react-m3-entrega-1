import BannerSection from "./components/BannerSection"
import PageTemplate from "./components/PageTemplate"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Tecnologies from "./components/Tecnologies"
import "../src/styles/reset.css"
import "../src/styles/GlobalStyles.css"


function App() {

  return (
    <>
      <PageTemplate>
        <BannerSection />
        <AboutMe />
        <Tecnologies />
        <Projects />
      </PageTemplate>
    </>
  )
}

export default App
