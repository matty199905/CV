import Footer from "./Layouts/Footer/Footer";
import Layout from "./Layouts/Layout/Layout";
import Navbar from "./Layouts/Navbar/Navbar";
import AboutMe from "./Sections/About Me/AboutMe";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import { GlobalStyles } from "./Styles/globalStyles";


function App() {
  return (

    <Layout>

      <GlobalStyles />
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact/>
      <Footer/>
    </Layout>

  );
}

export default App;
