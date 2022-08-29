import Hero from "../Hero/Hero"
import Services from "../Services/Services"
import Leftbar from "../Sidebar/Left/Leftbar"
import Rightbar from "../Sidebar/Right/Rightbar"

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
        <nav>
          <Rightbar />
        </nav>
      </div>
    </div>
  )
}

export default Main
