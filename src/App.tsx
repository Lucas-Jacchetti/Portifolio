
import AboutMeText from './components/aboutmetext'
import Bar from './components/bar'
import Header from './components/header'
import Name from './components/name'
import Projects from './components/projects'
import Tecnologies from './components/technologies'
import './index.css'
function App() {

  return (
    <>
      <Header />
        <div className='flex flex-col w-[100%]'>
          <Name/>
          <AboutMeText/>
          <Bar/>
          <Tecnologies/>
          <div className='mt-17'>
            <Bar/>
          </div>
          <Projects/>
          
          
        </div>
    </>
  )
}

export default App
