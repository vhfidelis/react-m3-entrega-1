import Footer from "../Footer";
import Header from "../Header";

const PageTemplate = ({ children }) => {
      return (<>
            <Header />
            {children}
            <Footer />
      </>
      )
}

export default PageTemplate