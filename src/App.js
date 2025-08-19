import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import ResponsiveNavbar from "./Components/Navbar/ResponsiveNav/ResponsiveNavbar";
import AboutMe from "./Sections/About Me/AboutMe";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import { useSelector } from 'react-redux';
import GlobalStyles from './Styles/globalStyles';
import Aurora from './Components/React Bits/AuroraBg/Aurora'



function App() {

  const { color } = useSelector(state => state.Background);

  return (
    <Layout>
      {
        color === 'dark' &&
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={5}
          amplitude={1.0}
          speed={0.8}
        />
      }
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
