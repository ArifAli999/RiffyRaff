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

function App() {

  return (
    <div className=" bg-lightblack w-full min-h-screen ">

      <div className='flex flex-col w-full min-h-[100vh]'>
        <Header />

        <div className='flex mx-auto  w-[85%] flex-col h-full'>
          <HeroBanner />
        </div>

        <TechStack />


        <AboutMe />

        <OffersSect />


        <div className='w-full flex border-t border-b border-bordergray gap-0  mb-10'>

          <div className='p-6 flex-1 border-r border-bordergray bg-darkgray'>
            <div className='w-[85%] mx-auto flex items-center justify-center  p-4'>
              <AiFillLinkedin className='text-white text-3xl mr-4 flex-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-purple-600' size={30} />
              <AiFillGithub className='text-white text-3xl mr-4 flex-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-purple-600' size={30} />
              <CgWebsite className='text-white text-3xl mr-4 flex-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-purple-600' size={30} />

            </div>
          </div>



        </div>






      </div>






    </div>
  );
}

export default App;
