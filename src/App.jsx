import './App.css'
import './index.css'
import Aboutme from './components/aboutme/Aboutme'
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
        <Aboutme/>
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
