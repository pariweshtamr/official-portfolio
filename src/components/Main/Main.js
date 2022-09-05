import { Container } from "react-bootstrap"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Journey from "../Journey/Journey"
import Leftbar from "../Sidebar/Left/Leftbar"
import Rightbar from "../Sidebar/Right/Rightbar"
import Work from "../Work/Work"

import "./main.scss"

const Main = () => {
  return (
    <Container fluid className="main">
      <div className="main-container">
        <main className="main-layout">
          <BrowserRouter>
            <aside>
              <Leftbar />
            </aside>
            <div className="main-wrapper">
              <Routes>
                <Route path="/" element={<Hero />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/portfolio" element={<Work />}></Route>
                <Route path="/journey" element={<Journey />}></Route>
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
