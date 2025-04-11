import Footer from "./Layouts/Footer/Footer";
import Layout from "./Layouts/Layout/Layout";
import Navbar from "./Layouts/Navbar/Navbar/Navbar";
import ResponsiveNavbar from "./Layouts/Navbar/ResponsiveNav/ResponsiveNavbar";
import AboutMe from "./Sections/About Me/AboutMe";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";



function App() {
  return (

    <Layout>
      <Navbar />
      <ResponsiveNavbar/>
      <AboutMe />
      <Projects />
      <Contact/>
      <Footer/>
    </Layout>

  );
}

export default App;
