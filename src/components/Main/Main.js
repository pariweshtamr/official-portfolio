import About from "../About/About"
import Contact from "../Contact/Contact"
import Hero from "../Hero/Hero"
import Services from "../Services/Services"
import Work from "../Work/Work"
import "./main.scss"

const Main = () => {
  return (
    <div className="main">
      <Hero />
      <hr className="main-hr" />
      <About />
      <hr className="main-hr" />
      <Services />
      <hr className="main-hr" />
      <Work />
      <hr className="main-hr" />
      <Contact />
      <hr className="main-hr" />
    </div>
  )
}

export default Main
