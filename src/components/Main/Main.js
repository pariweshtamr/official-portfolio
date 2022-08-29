import About from "../About/About"
import Contact from "../Contact/Contact"
import Hero from "../Hero/Hero"
import Services from "../Services/Services"
import Leftbar from "../Sidebar/Left/Leftbar"
import Skills from "../Skills/Skills"
import Work from "../Work/Work"
import "./main.scss"

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <aside>
          <Leftbar />
        </aside>
        <main>
          <div className="main-wrapper">
            <Hero />
            <Services />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Main
