import { useState } from "react"
import { Container } from "react-bootstrap"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Journey from "../Journey/Journey"
import Leftbar from "../Sidebar/Left/Leftbar"
import Rightbar from "../Sidebar/Right/Rightbar"
import Work from "../Work/Work"
import { motion } from "framer-motion"

import "./main.scss"

const Main = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [active, setActive] = useState("/home")

  return (
    <Container fluid className="main">
      <div className="main-container">
        <main className="main-layout">
          <BrowserRouter>
            <div className="app-mobile-top-bar">
              <div className="top-bar-nav">
                <ul>
                  <li>
                    <Link
                      to="/"
                      className={active === "/home" ? "active" : ""}
                      onClick={() => setActive("/home")}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      className={active === "/portfolio" ? "active" : ""}
                      onClick={() => setActive("/portfolio")}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/journey"
                      className={active === "/journey" ? "active" : ""}
                      onClick={() => setActive("/journey")}
                    >
                      Journey
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={active === "/contact" ? "active" : ""}
                      onClick={() => setActive("/contact")}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="info-bar-btn"
                onClick={() => setShowInfo(!showInfo)}
              >
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <aside className={showInfo ? "aside active" : "aside"}>
              <Leftbar />
            </aside>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="main-wrapper"
            >
              <Routes>
                <Route path="/" element={<Hero />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/portfolio" element={<Work />}></Route>
                <Route path="/journey" element={<Journey />}></Route>
              </Routes>
              <Footer />
            </motion.div>
            <nav className="nav">
              <Rightbar />
            </nav>
          </BrowserRouter>
        </main>
      </div>
    </Container>
  )
}

export default Main
