import './App.css'
import './index.css'
import AboutMe from './components/aboutme/AboutMe'
import RoleDescription from './components/aboutme/RoleDescription'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/Footer'
import Gimmick from './components/gimmick/Gimmick'


function App() {

  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div>
        <AboutMe/>
      </div>
      <div>

      </div>
      <div>
       <RoleDescription/>
      </div>
      <div>
        <Gimmick/>
      </div>
      <div>
        <Footer/>
      </div>

    </>
  )
}

export default App
