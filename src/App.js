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
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import ProjectPage from './components/ProjectPage';

function App() {

  return (
    <div className=" bg-lightblack w-full min-h-screen overflow-hidden ">

      <div className='flex flex-col w-full min-h-[100vh]'>
        <Header />

        <div className='flex mx-auto  flex-col h-full'>
          <HeroBanner />
        </div>
        <AboutMe />
        <TechStack />
        <ProjectPage />


        <div className='mt-10 p-4 bg-darkgray mb-6 h-full border-t border-bordergray'>

          <div className='flex p-4 h-fit w-[80%] mx-auto'>


            <div className='w-full h-fit flex-1 '>
              <div className='p-0 flex flex-col w-full h-full gap-10'>
                <div className='p-4 bg-tonedblack border-b border-bordergray'>
                  Design

                </div>

                <div className='p-4 bg-tonedblack border-b border-bordergray'>
                  Design

                </div>

                <div className='p-4 bg-tonedblack border-b border-bordergray'>
                  Design

                </div>


              </div>

            </div>

          </div>

        </div>



      </div>






    </div>
  );
}

export default App;
