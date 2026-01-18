import About from "./components/About"
import Experiences from "./components/Experiences"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Contact from "./components/Contact"


function App() {


  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%]">
        <Experiences/>
        <Projects/>
        <Contact/>
      </div>
      <Footer />
    </div>
  )
}

export default App
