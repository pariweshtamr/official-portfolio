import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import MainLayout from "../Layout/MainLayout"
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
        <MainLayout className="main-layout">
          <main>
            <div className="main-wrapper">
              <Hero />
              <Services />
              <Footer />
            </div>
          </main>
        </MainLayout>
        <nav>
          <Rightbar />
        </nav>
      </div>
    </div>
  )
}

export default Main
