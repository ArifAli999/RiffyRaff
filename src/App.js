import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import { SiJavascript, SiHtml5, SiReact, SiMysql, SiPhp, SiGraphql, SiPostgresql, SiGit, SiRedux } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import TechStack from './components/TechStack';
import AboutMe from './components/AboutMe';
import ServicesSect from './components/ServicesSect';
import OffersSect from './components/OffersSect';
import ProjectPage from './components/ProjectPage';
import { motion, useScroll } from "framer-motion";
import ContactPage from './components/ContactPage';
import SocialBanner from './components/SocialBanner'
import FooterComp from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();


  return (
    <div className=" bg-lightblack w-full min-h-screen overflow-hidden scrollbar-hide">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />


      <div className='flex flex-col w-full min-h-[100vh]'>
        <Header />

        <div className='flex mx-auto  flex-col h-full'>
          <HeroBanner />
        </div>
        <AboutMe />
        <TechStack />
        <ProjectPage />

        <ContactPage />

        <FooterComp />

      </div>






    </div>
  );
}

export default App;
