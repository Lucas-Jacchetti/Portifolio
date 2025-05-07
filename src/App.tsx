
import { useRef } from 'react'
import AboutMeText from './components/aboutmetext'
import Bar from './components/bar'
import Contacts from './components/contacts'
import Header from './components/header'
import Name from './components/name'
import Projects from './components/projects'
import Tecnologies from './components/technologies'
import './index.css'
function App() {

  const sectionRefs = {
    section1: useRef<HTMLDivElement>(null),
    section2: useRef<HTMLDivElement>(null),
    section3: useRef<HTMLDivElement>(null),
    section4: useRef<HTMLDivElement>(null),

  };

  // Scroll function that takes a section key
  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection}/>
        <div className='flex flex-col w-[100%]'>
          <Name/>

          <section ref={sectionRefs.section1}>
            <AboutMeText/>
          </section>

          <Bar/>
          <section ref={sectionRefs.section2}>
            <Tecnologies/>
          </section>

          <div>
            <Bar/>
          </div>

          <section ref={sectionRefs.section3}>
            <Projects/>
          </section>

          <section ref={sectionRefs.section4}>
            <Contacts/>
          </section>
          
          
        </div>
    </>
  )
}

export default App
