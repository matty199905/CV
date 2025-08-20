import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import ResponsiveNavbar from "./Components/Navbar/ResponsiveNav/ResponsiveNavbar";
import AboutMe from "./Sections/About Me/AboutMe";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import { useSelector } from 'react-redux';
import GlobalStyles from './Styles/globalStyles';


function App() {

  const { color } = useSelector(state => state.Background);

  return (
    <Layout>
      <GlobalStyles bgcolor={color} />
      <Navbar />
      <ResponsiveNavbar />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
