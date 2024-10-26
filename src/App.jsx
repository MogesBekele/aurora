import './App.css'
import Navbar from './pages/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'



function App() {

  return (
    <>

   <Navbar/>
   <Home/>
   <About/>
 
   <Services/>
   <Contact/>
    
    </>
  )
}

export default App
