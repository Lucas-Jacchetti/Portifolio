
import AboutMeText from './components/aboutmetext'
import Bar from './components/bar'
import Header from './components/header'
import Name from './components/name'
import Tecnologies from './components/technologies'
import './index.css'
function App() {

  return (
    <>
      <Header />
      <body className='font-futura bg-gradient-to-br from-ddarkblue from-25% via-gradientpink to-ddarkblue to-75% h-max w-max'>
        <div className='flex flex-col'>
          <Name/>
          <AboutMeText/>
          <Bar/>
          <Tecnologies/>
          
        </div>
      </body>
    </>
  )
}

export default App
