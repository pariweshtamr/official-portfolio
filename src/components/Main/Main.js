import About from "../About/About"
import Contact from "../Contact/Contact"
import Hero from "../Hero/Hero"
import Services from "../Services/Services"
import Skills from "../Skills/Skills"
import Work from "../Work/Work"
import "./main.scss"

const Main = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
    </div>
  )
}

export default Main
