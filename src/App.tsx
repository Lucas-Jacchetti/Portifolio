
import Header from './components/header'
import Name from './components/name'
import './index.css'
function App() {

  return (
    <>
      <Header />
      <body className='font-futura bg-gradient-to-br from-ddarkblue from-25% via-gradientpink to-ddarkblue to-75% h-max w-max'>
        <div className='flex flex-col'>
          <Name/>
          
        </div>
      </body>
    </>
  )
}

export default App
