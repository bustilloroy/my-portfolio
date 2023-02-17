// Components
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Frameworks
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

// Packages
import { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

// Data
import data from './Data/Basic-Data'
import frameWorkData from './Data/Framework-Data'
import projects from './Data/Projects'
import aboutData from './Data/About'
import info from './Data/Info'

function App() {
  const [themeMode, setThemeMode] = useState(false);
  
  useEffect(() => {
    AOS.init();
  }, []);

  function handleClick () {
    setThemeMode(prevMode => !prevMode);
  }

  const [basicSkillsData] = useState(data.map(item => {return item}));

  const [frameWorkSkillsData] = useState(frameWorkData.map(item => {return item}));
  
  const [project] = useState(projects.map(item => {return item}));

  const [about] = useState(aboutData.map(item => {return item}));

  const [datas] = useState(info.map(item => {return item}));

  return (
    <>
      <Header handleClick={handleClick} themeMode = {themeMode}/>
      <Hero themeMode={themeMode}/>
      <Skills row={basicSkillsData} row2={frameWorkSkillsData} themeMode={themeMode}/>
      <Projects card={project} themeMode={themeMode}/>
      <About themeMode={themeMode} timeLine={about} datas={datas}/>
      <Contact themeMode={themeMode} />
      <Footer themeMode={themeMode}/>
    </>
  );
}

export default App;
