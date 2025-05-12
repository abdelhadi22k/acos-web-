import MainPage from "../section/MainPage";
import About from "../section/About";
import Services from "../section/Services";
import Blog from "../section/Blog";
import SkillsAndExpertise from "../section/SkillsAndExpertise";
import Projects from "../section/Projects";
import Opinions from "../section/Opinions";
import FAQs from "../section/FAQs";
import ContactMe from "../section/ContactMe";
import NavBar from "../components/utils/NavBar";
import Footer from "./../components/Footer";
// import { Helmet } from 'react-helmet-async'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <MainPage />
      <About />
      <Services />
      <Projects />
      <SkillsAndExpertise />
      <Opinions />
      <Blog />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default HomePage;

//   <Helmet>
//   <title> Category</title>
// </Helmet>
