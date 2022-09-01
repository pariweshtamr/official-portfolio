import { Container } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import MainLayout from "../Layout/MainLayout"
import Services from "../Services/Services"
import Leftbar from "../Sidebar/Left/Leftbar"
import Rightbar from "../Sidebar/Right/Rightbar"
import Work from "../Work/Work"

import "./main.scss"

const Main = () => {
  return (
    <Container fluid className="main">
      <div className="main-container">
        <aside>
          <Leftbar />
        </aside>
        <main className="main-layout">
          <BrowserRouter>
            <div className="main-wrapper">
              <Routes>
                <Route path="/" element={<Hero />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/projects" element={<Work />}></Route>
              </Routes>
              <Footer />
            </div>

            <nav>
              <Rightbar />
            </nav>
          </BrowserRouter>
        </main>
      </div>
    </Container>
  )
}

export default Main
