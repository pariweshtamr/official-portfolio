import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "../Contact/Contact"
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
        <main className="main-layout">
          <div className="main-wrapper">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Hero />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
              </Routes>
              <nav>
                <Rightbar />
              </nav>
            </BrowserRouter>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Main
