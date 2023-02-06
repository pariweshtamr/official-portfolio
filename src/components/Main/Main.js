import { useState, lazy, Suspense } from "react"
import { Container } from "react-bootstrap"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Footer from "../Footer/Footer"
import Leftbar from "../Sidebar/Left/Leftbar"
import Rightbar from "../Sidebar/Right/Rightbar"
import { motion } from "framer-motion"
import "./main.scss"
const Hero = lazy(() => import("../Hero/Hero"))
const Contact = lazy(() => import("../Contact/Contact"))
const Journey = lazy(() => import("../Journey/Journey"))
const Work = lazy(() => import("../Work/Work"))
const PortfolioSingle = lazy(() => import("../SingleProject/PortfolioSingle"))

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
                <Route
                  path="/contact"
                  element={
                    <Suspense>
                      <Contact />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path="/portfolio"
                  element={
                    <Suspense>
                      <Work />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path="/portfolio/:id"
                  element={
                    <Suspense>
                      <PortfolioSingle />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path="/journey"
                  element={
                    <Suspense>
                      <Journey />
                    </Suspense>
                  }
                ></Route>
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
